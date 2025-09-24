import { ExternalLink, MapPin, Truck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import mapaNorteMinas1 from "@/assets/images/areaMatriz.webp";
import mapaNorteMinas2 from "@/assets/images/areaFilial.webp";

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
  const [expandedMap, setExpandedMap] = useState<number | null>(null);

  const handleMapClick = (mapIndex: number) => {
    setExpandedMap(expandedMap === mapIndex ? null : mapIndex);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Política Comercial Section - Moved to top */}
        <section className="relative py-16 sm:py-20 lg:py-24 xl:py-32">
          <div className="absolute inset-0 bg-gradient-hero opacity-10" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
                Nossa Política Comercial
              </h1>
              <p className="text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground mb-6 sm:mb-8">
                Hoje, nossas vendas são direcionadas a clientes com CNPJ ativo e compras recorrentes, 
                através do nosso parceiro BEES. Para compras esporádicas realizadas por CPF, 
                utilize o aplicativo Zé Delivery.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg"
                  className="flex items-center gap-2"
                >
                  <a 
                    href={import.meta.env.VITE_BEES_URL || "https://www.bees.com.br/"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Cadastrar no BEES - Abre em nova aba"
                  >
                    <Users className="h-4 w-4" />
                    Cadastrar no BEES
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  asChild
                  className="flex items-center gap-2"
                >
                  <a 
                    href={import.meta.env.VITE_ZE_URL || "https://www.ze.delivery/"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Comprar no Zé Delivery - Abre em nova aba"
                  >
                    <Truck className="h-4 w-4" />
                    Comprar no Zé Delivery
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Como Funciona Section - Expanded */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <Card className="bg-card shadow-elegant">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center gap-2 text-2xl sm:text-3xl">
                    Como funciona
                    <Badge variant="secondary">Info</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8 p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-6 rounded-lg bg-primary/5 border border-primary/20">
                      <div className="mx-auto mb-4 h-3 w-3 rounded-full bg-primary" />
                      <h3 className="text-lg font-semibold mb-2">CNPJ ativo + compras recorrentes</h3>
                      <p className="text-muted-foreground">
                        Cadastro e pedidos via BEES para empresas com CNPJ ativo e compras regulares.
                      </p>
                    </div>
                    
                    <div className="text-center p-6 rounded-lg bg-secondary/5 border border-secondary/20">
                      <div className="mx-auto mb-4 h-3 w-3 rounded-full bg-secondary" />
                      <h3 className="text-lg font-semibold mb-2">CPF ou compra pontual</h3>
                      <p className="text-muted-foreground">
                        Realize pedidos pelo Zé Delivery para compras esporádicas ou com CPF.
                      </p>
                    </div>
                    
                    <div className="text-center p-6 rounded-lg bg-accent/5 border border-accent/20">
                      <div className="mx-auto mb-4 h-3 w-3 rounded-full bg-accent" />
                      <h3 className="text-lg font-semibold mb-2">Cobertura logística</h3>
                      <p className="text-muted-foreground">
                        Atendemos mais de 30 cidades do Norte de Minas com nossa frota própria.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* BEES Platform */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-elegant">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Badge variant="secondary" className="text-base sm:text-lg px-3 py-1 sm:px-4 sm:py-2 mb-4 sm:mb-6">
                Plataforma BEES
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6 sm:mb-8">
                Sua Porta de Entrada para Nossos Produtos
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12">
                O BEES é a plataforma digital oficial da Ambev para pedidos, ofertas e 
                gestão do seu negócio. Através dela, você tem acesso a todo nosso portfólio 
                com condições especiais e atendimento personalizado.
              </p>
              
              <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 mt-12 sm:mt-16">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="shadow-card hover:shadow-elegant transition-shadow duration-300">
                    <CardHeader className="text-center p-4 sm:p-6">
                      <div className="mx-auto rounded-full bg-primary/10 p-2 sm:p-3 w-fit mb-3 sm:mb-4">
                        <benefit.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                      </div>
                      <CardTitle className="text-base sm:text-lg">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 pt-0">
                      <p className="text-sm sm:text-base text-muted-foreground text-center">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Area */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Área de Atendimento</h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground">
                Atendemos mais de 30 cidades no Norte de Minas
              </p>
            </div>
            
            <Card className="shadow-elegant">
              <CardHeader className="text-center p-4 sm:p-6">
                <CardTitle className="flex items-center justify-center gap-2 text-lg sm:text-xl lg:text-2xl">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  Região de Cobertura
                </CardTitle>
                <p className="text-sm sm:text-base text-muted-foreground mt-2">
                  Nossa frota chega a todos estes municípios com regularidade
                </p>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className={`grid gap-4 sm:gap-6 lg:gap-8 transition-all duration-500 ${
                  expandedMap !== null ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'
                }`}>
                  <div 
                    className={`group relative overflow-hidden rounded-lg sm:rounded-xl shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 cursor-pointer ${
                      expandedMap === 1 ? 'scale-105 z-50' : expandedMap === 2 ? 'scale-90 opacity-50 z-10' : 'z-20'
                    }`}
                    onClick={() => handleMapClick(1)}
                  >
                    <img
                      src={mapaNorteMinas1}
                      alt="Área de atendimento da Matriz"
                      className="w-full h-auto object-cover rounded-lg sm:rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg sm:rounded-xl" />
                    <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-primary/90 text-primary-foreground px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                      Matriz
                    </div>
                  </div>
                  <div 
                    className={`group relative overflow-hidden rounded-lg sm:rounded-xl shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 cursor-pointer ${
                      expandedMap === 2 ? 'scale-105 z-50' : expandedMap === 1 ? 'scale-90 opacity-50 z-10' : 'z-20'
                    }`}
                    onClick={() => handleMapClick(2)}
                  >
                    <img
                      src={mapaNorteMinas2}
                      alt="Área de atendimento da Filial"
                      className="w-full h-auto object-cover rounded-lg sm:rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg sm:rounded-xl" />
                    <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-secondary/90 text-secondary-foreground px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                      Filial
                    </div>
                  </div>
                </div>
                <div className="text-center mt-6 sm:mt-8">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Essas são as áreas que a nossa revenda!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How to Start */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-elegant">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6 sm:mb-8">
                Como Começar
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 mt-8 sm:mt-12">
                <div className="text-center">
                  <div className="rounded-full bg-primary text-primary-foreground w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-lg sm:text-xl font-bold mx-auto mb-3 sm:mb-4">
                    1
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">Cadastre-se no BEES</h3>
                  <p className="text-muted-foreground text-sm">
                    Acesse a plataforma e faça seu cadastro comercial
                  </p>
                </div>
                <div className="text-center">
                  <div className="rounded-full bg-secondary text-secondary-foreground w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-lg sm:text-xl font-bold mx-auto mb-3 sm:mb-4">
                    2
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">Aprovação</h3>
                  <p className="text-muted-foreground text-sm">
                    Aguarde a análise e aprovação do seu cadastro
                  </p>
                </div>
                <div className="text-center">
                  <div className="rounded-full bg-accent text-accent-foreground w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-lg sm:text-xl font-bold mx-auto mb-3 sm:mb-4">
                    3
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">Comece a Comprar</h3>
                  <p className="text-muted-foreground text-sm">
                    Faça seus pedidos e receba em sua cidade
                  </p>
                </div>
              </div>
              
              <div className="mt-8 sm:mt-12">
                <Button size="lg" asChild className="w-full sm:w-auto">
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
