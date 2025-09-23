import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Users, Truck } from "lucide-react";

// Brand portfolio images
import coloradoMarcas from "@/assets/colorado-marcas.jpg";
import gatoradeMarcas from "@/assets/gatorade-marcas.jpg";
import brutalFruitMarcas from "@/assets/brutal-fruit-marcas.jpg";
import serranaMarcas from "@/assets/serrana-marcas.jpg";
import caracuMarcas from "@/assets/caracu-marcas.jpg";
import beatsMarcas from "@/assets/beats-marcas.jpg";
import hoegaardenMarcas from "@/assets/hoegaarden-marcas.jpg";
import stellaPortifolio from "@/assets/stella-portifolio.jpg";
import mikesMarcas from "@/assets/mikes-marcas.jpg";
import ypeMarcas from "@/assets/ype-marcas.jpg";
import florestalMarcas from "@/assets/florestal-marcas.jpg";
import fusionPortifolio from "@/assets/fusion-portifolio.jpg";
import originalMarcas from "@/assets/original-marcas.jpg";


// Brand logos mapping
const brandLogos: Record<string, string> = {
  "Colorado": coloradoMarcas,
  "Gatorade": gatoradeMarcas,
  "Florestal": florestalMarcas,
  "Serrana": serranaMarcas,
  "Caracu": caracuMarcas,
  "Beats": beatsMarcas,
  "Hoegaarden": hoegaardenMarcas,
  "Mike's": mikesMarcas,
  "Ypê": ypeMarcas,
  "Brutal Fruit": brutalFruitMarcas,
  "Fusion": fusionPortifolio,
  "Original": originalMarcas,
};

const brands = [
  { name: "Gatorade", category: "Isotônico" },
  { name: "Beats", category: "Bebidas Gaseificadas" },
  { name: "Colorado", category: "Cervejas Premium" },
  { name: "Mike's", category: "Bebidas Gaseificadas" },
  { name: "Florestal", category: "Diversos" },
  { name: "Hoegaarden", category: "Cervejas Premium" },
  { name: "Brutal Fruit", category: "Refrigerantes" },
  { name: "Serrana", category: "Cervejas" },
  { name: "Caracu", category: "Cervejas Premium" },
  { name: "Ypê", category: "Limpeza" },
  { name: "Fusion", category: "Energéticos" },
  { name: "Original", category: "Cervejas" },
];

const categories = [
  { name: "Cervejas", count: 4, color: "bg-primary" },
  { name: "Cervejas Premium", count: 3, color: "bg-accent" },
  { name: "Refrigerantes", count: 2, color: "bg-secondary" },
  { name: "Bebidas Gaseificadas", count: 2, color: "bg-primary-light" },
  { name: "Energéticos", count: 1, color: "bg-secondary-light" },
  { name: "Isotônico", count: 1, color: "bg-accent-light" },
];

export default function Marcas() {
  const beesUrl = import.meta.env.VITE_BEES_URL || "https://www.bees.com.br/";
  const zeUrl = import.meta.env.VITE_ZE_URL || "https://www.ze.delivery/";

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32">
          <div className="absolute inset-0 bg-gradient-secondary opacity-10" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
                Nossas Marcas
              </h1>
              <p className="text-lg leading-8 text-muted-foreground">
                Representamos com orgulho as marcas da Ambev no Norte de Minas
              </p>
            </div>
          </div>
        </section>

        {/* Seja Nosso Cliente Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              {/* Text Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight mb-6">
                    Seja Nosso Cliente
                  </h2>
                  <p className="text-lg leading-8 text-muted-foreground mb-8">
                    Hoje, nossas vendas são direcionadas a clientes com CNPJ ativo e compras recorrentes, 
                    através do nosso parceiro BEES. Para compras esporádicas realizadas por CPF, 
                    utilize o aplicativo Zé Delivery.
                  </p>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    asChild
                    className="flex items-center gap-2"
                  >
                    <a 
                      href={beesUrl} 
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
                    asChild
                    className="flex items-center gap-2"
                  >
                    <a 
                      href={zeUrl} 
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

              {/* Info Card */}
              <div>
                <Card className="bg-card shadow-card hover:shadow-elegant transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      Como funciona
                      <Badge variant="secondary">Info</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        <strong>CNPJ ativo + compras recorrentes</strong> → cadastro e pedidos via BEES.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        <strong>CPF ou compra pontual</strong> → realizar pedido pelo Zé Delivery.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        <strong>Cobertura logística</strong> para 30+ cidades do Norte de Minas.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Ambev Partnership */}
        <section className="py-16 bg-gradient-elegant">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-8">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  Parceiro Ambev
                </Badge>
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Parceria Estratégica
              </h2>
              <p className="text-lg leading-8 text-muted-foreground">
                Como distribuidores oficiais da Ambev no Norte de Minas, oferecemos 
                acesso completo ao portfólio das principais marcas de bebidas do Brasil. 
                Nossa parceria garante produtos autênticos, frescor garantido e 
                suporte especializado.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Overview */}
        {/*(<section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight">Categorias de Produtos</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Diversidade e qualidade em cada categoria
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="relative overflow-hidden rounded-2xl bg-card p-8 shadow-card hover:shadow-elegant transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                    <div className={`h-3 w-3 rounded-full ${category.color}`} />
                  </div>
                  <p className="text-muted-foreground">
                    {category.count} {category.count > 1 ? 'marcas disponíveis' : 'marca disponível'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>*/}

        {/* Brands Grid */}
        <section className="py-24 bg-gradient-elegant">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight">Portfolio Completo</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Todas as marcas que distribuímos na região
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {brands.map((brand, index) => (
                <div
                  key={brand.name}
                  className="group relative overflow-hidden rounded-xl bg-card p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-white text-xl font-bold overflow-hidden">
                      {brandLogos[brand.name] ? (
                        <img
                          src={brandLogos[brand.name]}
                          alt={`${brand.name} logo`}
                          className="w-full h-full object-cover rounded-full"
                        />
                      ) : (
                        <div className="bg-gradient-primary w-full h-full flex items-center justify-center rounded-full">
                          {brand.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{brand.name}</h3>
                    <Badge variant="outline" className="text-xs">
                      {brand.category}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-8">
                Garantia de Qualidade
              </h2>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-primary/10 p-4 mb-4">
                    <div className="h-8 w-8 rounded bg-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Produtos Originais</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Todas as marcas são originais e distribuídas com a melhor qualidade do mercado
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-secondary/10 p-4 mb-4">
                    <div className="h-8 w-8 rounded bg-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">Frescor Garantido</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Controle rigoroso de temperatura e prazo de validade
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-accent/10 p-4 mb-4">
                    <div className="h-8 w-8 rounded bg-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Entrega Rápida</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Logística eficiente para 30+ cidades da região
                  </p>
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
