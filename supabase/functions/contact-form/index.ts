import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Rate limiting store (in-memory for demo, use Redis in production)
const rateLimitStore = new Map<string, { count: number; timestamp: number }>();

interface ContactFormData {
  nome: string;
  telefone?: string;
  email: string;
  mensagem: string;
}

function validateAndSanitizeInput(data: ContactFormData): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Sanitize and validate name
  if (!data.nome || data.nome.trim().length < 2) {
    errors.push("Nome deve ter pelo menos 2 caracteres");
  }
  if (data.nome && data.nome.length > 100) {
    errors.push("Nome deve ter no máximo 100 caracteres");
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push("Email deve ter um formato válido");
  }
  if (data.email && data.email.length > 254) {
    errors.push("Email deve ter no máximo 254 caracteres");
  }

  // Validate phone (optional)
  if (data.telefone && data.telefone.trim()) {
    const phoneRegex = /^[\(\)\s\-\+\d]{10,20}$/;
    if (!phoneRegex.test(data.telefone)) {
      errors.push("Telefone deve ter um formato válido");
    }
  }

  // Validate message
  if (!data.mensagem || data.mensagem.trim().length < 10) {
    errors.push("Mensagem deve ter pelo menos 10 caracteres");
  }
  if (data.mensagem && data.mensagem.length > 2000) {
    errors.push("Mensagem deve ter no máximo 2000 caracteres");
  }

  // Check for potential spam patterns
  const spamPatterns = [
    /https?:\/\//gi, // URLs
    /(?:call|text|whatsapp|telegram)\s*(?:me|now)/gi, // Spam keywords
  ];

  for (const pattern of spamPatterns) {
    if (pattern.test(data.mensagem) || pattern.test(data.nome)) {
      errors.push("Mensagem contém conteúdo suspeito");
      break;
    }
  }

  return { isValid: errors.length === 0, errors };
}

function sanitizeString(str: string): string {
  return str.trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/\s+/g, ' '); // Normalize whitespace
}

function checkRateLimit(clientIp: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // Max 5 submissions per 15 minutes

  const clientData = rateLimitStore.get(clientIp);
  
  if (!clientData || (now - clientData.timestamp) > windowMs) {
    rateLimitStore.set(clientIp, { count: 1, timestamp: now });
    return true;
  }

  if (clientData.count >= maxRequests) {
    return false;
  }

  rateLimitStore.set(clientIp, { count: clientData.count + 1, timestamp: clientData.timestamp });
  return true;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    // Get client IP for rate limiting
    const clientIp = req.headers.get('x-forwarded-for') || 
                     req.headers.get('x-real-ip') || 
                     'unknown';

    // Check rate limit
    if (!checkRateLimit(clientIp)) {
      console.log(`Rate limit exceeded for IP: ${clientIp}`);
      return new Response(JSON.stringify({ 
        error: 'Muitas tentativas. Tente novamente em 15 minutos.' 
      }), {
        status: 429,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const body = await req.json();
    
    // Validate and sanitize input
    const { isValid, errors } = validateAndSanitizeInput(body);
    
    if (!isValid) {
      console.log(`Validation failed for IP ${clientIp}:`, errors);
      return new Response(JSON.stringify({ 
        error: 'Dados inválidos', 
        details: errors 
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Sanitize the data
    const sanitizedData = {
      nome: sanitizeString(body.nome),
      telefone: body.telefone ? sanitizeString(body.telefone) : null,
      email: sanitizeString(body.email.toLowerCase()),
      mensagem: sanitizeString(body.mensagem),
    };

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Insert into database
    const { error } = await supabase
      .from('contacts')
      .insert([sanitizedData]);

    if (error) {
      console.error('Database error:', error);
      throw error;
    }

    console.log(`Contact form submitted successfully from IP: ${clientIp}`);

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Mensagem enviada com sucesso!' 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in contact-form function:', error);
    return new Response(JSON.stringify({ 
      error: 'Erro interno do servidor. Tente novamente mais tarde.' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});