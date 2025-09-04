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

    // O Formspree cuidará do envio dos dados
    const form = e.target as HTMLFormElement;
    
    // Envia os dados para o Formspree
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
    });

    if (response.ok) {
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Retornaremos em breve.",
      });
    } else {
      toast({
        title: "Erro ao enviar",
        description: "Houve um problema ao enviar sua mensagem. Tente novamente.",
      });
    }

    setIsSubmitting(false);
    form.reset(); // Resetar o formulário
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 xl:py-32">
          <div className="absolute inset-0 bg-gradient-hero opacity-10" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
                Contato
              </h1>
              <p className="text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground">
                Entre em contato conosco. Estamos aqui para ajudar!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-elegant">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-x-8">
              
              {/* Contact Information */}
              <div className="lg:pr-4 order-2 lg:order-1">
                {/* ... (seu conteúdo de informações de contato) ... */}
              </div>

              {/* Contact Form */}
              <div className="order-1 lg:order-2">
                <Card className="shadow-elegant">
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-lg sm:text-xl">Envie uma Mensagem</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <form 
                      action="https://formspree.io/f/mandljkd" // Substitua pelo ID do seu formulário
                      method="POST"
                      onSubmit={handleSubmit} 
                      className="space-y-4 sm:space-y-6"
                    >
                      <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="nome" className="text-sm sm:text-base">Nome *</Label>
                          <Input 
                            id="nome" 
                            name="nome"
                            type="text" 
                            required
                            placeholder="Seu nome completo"
                            className="text-sm sm:text-base"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="telefone" className="text-sm sm:text-base">Telefone</Label>
                          <Input 
                            id="telefone" 
                            name="telefone"
                            type="tel" 
                            placeholder="(00) 00000-0000"
                            className="text-sm sm:text-base"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm sm:text-base">E-mail *</Label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email" 
                          required
                          placeholder="seu@email.com"
                          className="text-sm sm:text-base"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="mensagem" className="text-sm sm:text-base">Mensagem *</Label>
                        <Textarea 
                          id="mensagem" 
                          name="mensagem"
                          required
                          placeholder="Digite sua mensagem..."
                          rows={5}
                          className="text-sm sm:text-base resize-none"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full text-sm sm:text-base" 
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
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Nossa Localização</h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground">
                Estamos localizados em Montes Claros, atendendo todo o Norte de Minas
              </p>
            </div>
            <Card className="shadow-elegant overflow-hidden">
              <div className="relative w-full h-0 pb-[56.25%]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1549.9183167952733!2d-43.80456646070933!3d-16.68381655431447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x754aa6c5384419b%3A0xe5316dc8a4e1aa5d!2sDistribuidora%20de%20Bebidas%20Cervantes!5e0!3m2!1spt-BR!2sbr!4v1756407698944!5m2!1spt-BR!2sbr" 
                  className="absolute top-0 left-0 w-full h-full"
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
