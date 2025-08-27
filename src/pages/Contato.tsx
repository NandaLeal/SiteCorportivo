import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contato() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Retornaremos em breve.",
      });
      setIsSubmitting(false);
      // Reset form
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32">
          <div className="absolute inset-0 bg-gradient-hero opacity-10" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
                Contato
              </h1>
              <p className="text-lg leading-8 text-muted-foreground">
                Entre em contato conosco. Estamos aqui para ajudar!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-24 bg-gradient-elegant">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
              
              {/* Contact Information */}
              <div className="lg:pr-4">
                <div className="space-y-6">
                  <Card className="shadow-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        Endereço
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Montes Claros - MG<br />
                        Norte de Minas Gerais<br />
                        Brasil
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="shadow-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Phone className="h-5 w-5 text-primary" />
                        Telefone
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <a
                        href="tel:+553832131234"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        (38) 3213-1234
                      </a>
                    </CardContent>
                  </Card>

                  <Card className="shadow-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Mail className="h-5 w-5 text-primary" />
                        E-mail
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <a
                        href="mailto:contato@cervantes.com.br"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        contato@cervantes.com.br
                      </a>
                    </CardContent>
                  </Card>

                  <Card className="shadow-card">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        Horário de Atendimento
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-1 text-muted-foreground">
                        <p>Segunda a Sexta: 8h às 18h</p>
                        <p>Sábado: 8h às 12h</p>
                        <p>Domingo: Fechado</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle>Envie uma Mensagem</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="nome">Nome *</Label>
                          <Input 
                            id="nome" 
                            name="nome"
                            type="text" 
                            required
                            placeholder="Seu nome completo"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="telefone">Telefone</Label>
                          <Input 
                            id="telefone" 
                            name="telefone"
                            type="tel" 
                            placeholder="(00) 00000-0000"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail *</Label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email" 
                          required
                          placeholder="seu@email.com"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="mensagem">Mensagem *</Label>
                        <Textarea 
                          id="mensagem" 
                          name="mensagem"
                          required
                          placeholder="Digite sua mensagem..."
                          rows={5}
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full" 
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Nossa Localização</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Estamos localizados em Montes Claros, atendendo todo o Norte de Minas
              </p>
            </div>
            
            <Card className="shadow-elegant overflow-hidden">
              <div className="aspect-[16/9] bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-lg font-semibold">Mapa Interativo</p>
                  <p className="text-muted-foreground">
                    Montes Claros - Norte de Minas Gerais
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}