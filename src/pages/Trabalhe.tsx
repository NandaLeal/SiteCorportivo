import { Heart, Users, Target, Mail, Phone, Instagram, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Trabalhe() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32">
          <div className="absolute inset-0 bg-gradient-hero opacity-10" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
                Trabalhe Conosco
              </h1>
              <p className="text-lg leading-8 text-muted-foreground">
                Faça parte de um time que topa qualquer parada, assume desafios e bate metas!
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24 bg-gradient-elegant">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <Card className="shadow-elegant">
              <CardContent className="p-12">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary mb-6">
                    <Heart className="h-5 w-5" />
                    <span className="font-medium">Diversidade & Inclusão</span>
                    <span className="text-lg"></span>
                  </div>
                  <h2 className="text-3xl font-bold mb-6">Oportunidades para Todos</h2>
                </div>

                <div className="prose prose-lg max-w-none text-center space-y-6">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    A Cervantes acredita que todo ser humano deve ter a oportunidade de trabalhar e se desenvolver 
                    em um ambiente que valoriza o <strong className="text-primary">respeito</strong>, a{" "}
                    <strong className="text-secondary">diversidade</strong> e a{" "}
                    <strong className="text-accent">inclusão</strong>.
                  </p>
                  
                  <div className="bg-gradient-primary/5 rounded-2xl p-8 my-8">
                    <p className="text-xl font-semibold text-foreground mb-4">
                      Somos um time que topa qualquer parada, assume desafios e bate metas!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Social Media & Contact */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
                Como se Candidatar
              </h2>
              
              <div className="space-y-8">
                {/* Social Media */}
                <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                      <Users className="h-6 w-6 text-primary" />
                      Acompanhe Nossas Vagas
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Todas as nossas vagas são divulgadas nas redes sociais:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button variant="outline" asChild className="justify-start h-auto p-4">
                        <a
                          href="https://www.instagram.com/cervantes.ambev/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3"
                        >
                          <Instagram className="h-5 w-5 text-pink-600" />
                          <div className="text-left">
                            <div className="font-semibold">Instagram</div>
                            <div className="text-sm text-muted-foreground">@cervantes.ambev</div>
                          </div>
                        </a>
                      </Button>
                      
                      <Button variant="outline" asChild className="justify-start h-auto p-4">
                        <a
                          href="https://www.linkedin.com/company/cervantes-ambev/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3"
                        >
                          <Linkedin className="h-5 w-5 text-blue-700" />
                          <div className="text-left">
                            <div className="font-semibold">LinkedIn</div>
                            <div className="text-sm text-muted-foreground">cervantes-ambev</div>
                          </div>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Email Application */}
                <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                      <Mail className="h-6 w-6 text-secondary" />
                      Envie seu Currículo
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Caso tenha interesse em fazer parte da nossa equipe, envie seu currículo para:
                    </p>
                    <Button asChild className="w-full md:w-auto">
                      <a href="mailto:trabalheconosco@cervantes.com.br" className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        trabalheconosco@cervantes.com.br
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Phone Contact */}
                <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                      <Phone className="h-6 w-6 text-accent" />
                      Dúvidas?
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Entre em contato conosco para esclarecer suas dúvidas:
                    </p>
                    <Button variant="outline" asChild className="w-full md:w-auto">
                      <a href="tel:+553832131234" className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        (38) 3213-1234
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Good Luck Message */}
              <div className="text-center mt-12">
                <div className="inline-flex items-center gap-2 rounded-full bg-success/10 px-6 py-3 text-success">
                  <Target className="h-5 w-5" />
                  <span className="font-medium">Boa sorte</span>
                  <span className="text-xl">🍀</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
