import { ArrowRight, Target, Eye, Heart, Truck, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBanner from "@/assets/hero-banner.jpg";
import brandsShowcase from "@/assets/brands-showcase.jpg";
import teamImage from "@/assets/team-diversity.jpg";
import brahmaLogo from "@/assets/brahma-logo.jpg";
import spatenLogo from "@/assets/spaten-logo.jpg";
import stellaLogo from "@/assets/stella-logo.jpg";
import guaranaLogo from "@/assets/guarana-logo.jpg";
import redbullLogo from "@/assets/redbull-logo.jpg";

const brandLogos = [
  { name: "Brahma", image: brahmaLogo },
  { name: "Spaten", image: spatenLogo },
  { name: "Stella Artois", image: stellaLogo },
  { name: "Guaraná Antarctica", image: guaranaLogo },
  { name: "Red Bull", image: redbullLogo },
];

const brands = [
  "Budweiser", "Skol", "Brahma", "Antarctica", "Stella Artois", 
  "Corona", "Guaraná Antarctica", "Pepsi", "H2OH!", "Lipton"
];

const stats = [
  { number: "31", label: "Anos de Tradição", icon: Star },
  { number: "30+", label: "Cidades Atendidas", icon: Truck },
  { number: "1000+", label: "Clientes Satisfeitos", icon: Users },
];

export default function Index() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 sm:py-32 lg:py-40">
          <div className="absolute inset-0">
            <img
              src={heroBanner}
              alt="Frota Cervantes - Distribuidora de Bebidas"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
          </div>
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <Badge variant="secondary" className="mb-6 text-base px-4 py-2">
                Parceiro Oficial Ambev
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                31 anos levando qualidade para o Norte de Minas
              </h1>
              <p className="mt-6 text-xl leading-8 text-white/90">
                Há <strong>31 anos</strong> levando qualidade e confiança para <strong>Montes Claros</strong> e 
                mais <strong>30 cidades do Norte de Minas</strong>.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                  <Link to="/seja-cliente">
                    Quer ser nosso cliente?
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white/10">
                  <Link to="/trabalhe-conosco">
                    Trabalhe Conosco
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-elegant">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <stat.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Introduction */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
              <div className="lg:pr-8">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  Mais que uma distribuidora
                </h2>
                <p className="text-lg leading-8 text-muted-foreground mb-8">
                  Somos a <strong className="text-foreground">Distribuidora de Bebidas Cervantes</strong>, 
                  representantes da Ambev em nossa região. Nosso compromisso é 
                  <strong className="text-primary"> excelência</strong>, 
                  <strong className="text-secondary"> sustentabilidade</strong> e 
                  <strong className="text-accent"> foco no cliente</strong>.
                </p>
                <p className="text-lg leading-8 text-muted-foreground mb-8">
                  Acreditamos firmemente em ser mais do que uma simples revenda, 
                  <strong className="text-primary"> inspirando pessoas a fazer o bem</strong>.
                </p>
                <Button asChild>
                  <Link to="/quem-somos">
                    Conheça Nossa História
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <img
                  src={teamImage}
                  alt="Equipe Cervantes - Diversidade e Inclusão"
                  className="w-full rounded-2xl shadow-elegant"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Brands Carousel */}
        <section className="py-24 bg-gradient-elegant">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4 font-gotham">
                Marcas que Distribuímos
              </h2>
              <p className="text-lg text-muted-foreground font-museo">
                Representamos com orgulho as principais marcas da Ambev
              </p>
            </div>
            
            {/* Featured Brand Logos Carousel */}
            <div className="relative mb-16">
              <div className="flex justify-center items-center gap-8 mb-12 overflow-x-auto pb-4">
                {brandLogos.map((brand, index) => (
                  <div
                    key={brand.name}
                    className="flex-shrink-0 group relative overflow-hidden rounded-2xl bg-white shadow-elegant hover:shadow-soft transition-all duration-300 hover:-translate-y-2 min-w-[200px]"
                  >
                    <div className="p-6 text-center">
                      <div className="h-24 w-full flex items-center justify-center mb-4 overflow-hidden rounded-xl">
                        <img 
                          src={brand.image} 
                          alt={`${brand.name} logo`}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <h3 className="text-lg font-semibold font-gotham text-foreground">{brand.name}</h3>
                    </div>
                    <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl shadow-elegant mb-12">
              <img
                src={brandsShowcase}
                alt="Marcas distribuídas pela Cervantes"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
            </div>
            
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {brands.map((brand, index) => (
                <div
                  key={brand}
                  className="group relative overflow-hidden rounded-xl bg-card p-4 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 text-center"
                >
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-white text-lg font-bold mx-auto font-gotham">
                    {brand.charAt(0)}
                  </div>
                  <h3 className="text-sm font-semibold font-museo">{brand}</h3>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" asChild className="font-gotham">
                <Link to="/marcas">
                  Ver Todas as Marcas
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Nossos Valores
              </h2>
              <p className="text-lg text-muted-foreground">
                Os pilares que guiam nossa jornada há mais de três décadas
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300 border-t-4 border-t-primary">
                <CardHeader className="text-center">
                  <div className="rounded-full bg-primary/10 p-3 w-fit mx-auto mb-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Missão</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    Distribuir produtos de qualidade com excelência operacional, 
                    construindo relacionamentos duradouros e contribuindo para 
                    o desenvolvimento da região Norte de Minas.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300 border-t-4 border-t-secondary">
                <CardHeader className="text-center">
                  <div className="rounded-full bg-secondary/10 p-3 w-fit mx-auto mb-4">
                    <Eye className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">Visão</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    Ser a distribuidora de bebidas mais confiável e inovadora 
                    do Norte de Minas, reconhecida pela excelência no atendimento 
                    e sustentabilidade.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300 border-t-4 border-t-accent">
                <CardHeader className="text-center">
                  <div className="rounded-full bg-accent/10 p-3 w-fit mx-auto mb-4">
                    <Heart className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Sonho</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    Inspirar pessoas a fazer o bem, criando um impacto positivo 
                    na sociedade através de nossos produtos, serviços e 
                    relacionamentos genuínos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-hero">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                Pronto para Fazer Parte da Nossa História?
              </h2>
              <p className="text-xl text-white/90 mb-10">
                Seja nosso cliente ou integre nossa equipe. Juntos, continuamos 
                construindo o futuro do Norte de Minas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/seja-cliente">
                    Quer ser nosso cliente?
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link to="/trabalhe-conosco">
                    Trabalhe Conosco
                  </Link>
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