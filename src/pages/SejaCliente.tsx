import { ExternalLink, MapPin, Truck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import mapaNorteMinas1 from "@/assets/images/AREA MATRIZ.webp";
import mapaNorteMinas2 from "@/assets/images/AREA FILIAL.webp";

const benefits = [
  {
    icon: Users,
    title: "Atendimento Especializado",
    description: "Equipe treinada para atender suas necessidades específicas"
  },
  {
    icon: Truck,
    title: "Entrega Garantida",
    description: "Frota própria com cobertura em 30+ cidades da região"
  },
  {
    icon: MapPin,
    title: "Cobertura Regional",
    description: "Presente em todo o Norte de Minas com logística eficiente"
  }
];

export default function SejaCliente() {
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
                Seja Nosso Cliente
              </h1>
              <p className="text-lg leading-8 text-muted-foreground mb-8">
                Cadastre-se pelo nosso parceiro BEES e tenha acesso ao nosso portfólio completo
              </p>
              <Button size="lg" asChild>
                <a 
                  href="https://bees.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Cadastrar no BEES
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* BEES Platform */}
        <section className="py-24 bg-gradient-elegant">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Badge variant="secondary" className="text-lg px-4 py-2 mb-6">
                Plataforma BEES
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight mb-8">
                Sua Porta de Entrada para Nossos Produtos
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                O BEES é a plataforma digital oficial da Ambev para pedidos, ofertas e 
                gestão do seu negócio. Através dela, você tem acesso a todo nosso portfólio 
                com condições especiais e atendimento personalizado.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="shadow-card hover:shadow-elegant transition-shadow duration-300">
                    <CardHeader className="text-center">
                      <div className="mx-auto rounded-full bg-primary/10 p-3 w-fit mb-4">
                        <benefit.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-center">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Area */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight">Área de Atendimento</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Atendemos mais de 30 cidades no Norte de Minas
              </p>
            </div>
            
            <Card className="shadow-elegant">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                  <MapPin className="h-6 w-6 text-primary" />
                  Região de Cobertura
                </CardTitle>
                <p className="text-muted-foreground">
                  Nossa frota chega a todos estes municípios com regularidade
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                    <img
                      src={mapaNorteMinas1}
                      alt="Área de atendimento da Matriz"
                      className="w-full h-auto object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  </div>
                  <div className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                    <img
                      src={mapaNorteMinas2}
                      alt="Área de atendimento da Filial"
                      className="w-full h-auto object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  </div>
                </div>
                <div className="text-center mt-8">
                  <p className="text-sm text-muted-foreground">
                    Áreas destacadas representam nossa cobertura completa de entrega
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How to Start */}
        <section className="py-24 bg-gradient-elegant">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-8">
                Como Começar
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="rounded-full bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Cadastre-se no BEES</h3>
                  <p className="text-muted-foreground text-sm">
                    Acesse a plataforma e faça seu cadastro comercial
                  </p>
                </div>
                <div className="text-center">
                  <div className="rounded-full bg-secondary text-secondary-foreground w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Aprovação</h3>
                  <p className="text-muted-foreground text-sm">
                    Aguarde a análise e aprovação do seu cadastro
                  </p>
                </div>
                <div className="text-center">
                  <div className="rounded-full bg-accent text-accent-foreground w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Comece a Comprar</h3>
                  <p className="text-muted-foreground text-sm">
                    Faça seus pedidos e receba em sua cidade
                  </p>
                </div>
              </div>
              
              <div className="mt-12">
                <Button size="lg" asChild>
                  <a 
                    href="https://bees.com.br" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Começar Agora no BEES
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
