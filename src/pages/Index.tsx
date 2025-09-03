import { ArrowRight, Target, Eye, Heart, Truck, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBanner from "@/assets/hero-banner.jpg";
import brandsShowcase from "@/assets/brands-showcase.jpg";
import teamImage from "@/assets/team-diversity.jpg";
import brahmaLogo from "@/assets/brahma-logo.jpg";
import spatenLogo from "@/assets/spaten-logo.jpg";
import redbullLogo from "@/assets/redbull-logo.jpg";
import guaranaLogo from "@/assets/guarana-logo.jpg";
import stellaLogo from "@/assets/stella-logo.jpg";

const brandLogos = [
  { name: "Brahma", image: brahmaLogo },
  { name: "Spaten", image: spatenLogo },
  { name: "Stella", image: stellaLogo },
  { name: "Guaraná Antarctica", image: guaranaLogo },
  { name: "Red Bull", image: redbullLogo },
];

const brands = [
  "Budweiser", "Skol", "Brahma", "Antarctica", "Stella Artois", 
  "Corona", "Guaraná Antarctica", "Pepsi", "H2OH!", "Lipton"
];

const stats = [
  { number: "+30", label: "Anos de Tradição", icon: Star },
  { number: "30+", label: "Cidades Atendidas", icon: Truck },
  { number: "1000+", label: "Clientes Satisfeitos", icon: Users },
];

export default function Index() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 lg:py-32 xl:py-40 overflow-hidden min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen flex items-center">
          <Carousel 
            className="absolute inset-0 group"
            plugins={[Autoplay({ delay: 4000 })]}
          >
            <CarouselContent>
              {brandLogos.map((brand) => (
                <CarouselItem key={brand.name}>
                  <div className="relative h-full min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen">
                    <img
                      src={brand.image}
                      alt={`${brand.name} - Distribuída pela Cervantes`}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 sm:left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8 sm:h-10 sm:w-10" />
            <CarouselNext className="right-2 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8 sm:h-10 sm:w-10" />
          </Carousel>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <Badge variant="secondary" className="mb-4 sm:mb-6 text-sm sm:text-base px-3 py-1 sm:px-4 sm:py-2 font-gotham font-medium">
                Revenda Ambev
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-gotham font-bold tracking-tight text-white">
                Cervantes
              </h1>
              <p className="mt-4 sm:mt-6 text-lg sm:text-xl font-gotham font-light leading-7 sm:leading-8 text-white/90">
                Há <strong className="font-medium">+30 anos</strong> levando qualidade e confiança para <strong className="font-medium">Montes Claros</strong> e 
                mais <strong className="font-medium">30 cidades do Norte de Minas</strong>.
              </p>
              <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-x-6">
                <Button size="lg" asChild className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 font-gotham font-medium">
                  <Link to="/seja-cliente">
                    <span className="hidden sm:inline">Quer ser nosso cliente?</span>
                    <span className="sm:hidden">Seja Cliente</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="w-full sm:w-auto border-white text-white hover:bg-white/10 font-gotham font-medium">
                  <Link to="/trabalhe-conosco">
                    Trabalhe Conosco
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-elegant">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div className="rounded-full bg-primary/10 p-2 sm:p-3">
                      <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl font-gotham font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm sm:text-base text-muted-foreground font-gotham font-medium px-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Introduction */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0 lg:items-center">
              <div className="lg:pr-8 order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-gotham font-bold tracking-tight mb-4 sm:mb-6">
                  Mais que uma distribuidora
                </h2>
                <p className="text-base sm:text-lg font-gotham font-light leading-7 sm:leading-8 text-muted-foreground mb-6 sm:mb-8">
                  Somos a <strong className="font-medium text-foreground">Distribuidora de Bebidas Cervantes</strong>, 
                  representantes da Ambev em nossa região. Nosso compromisso é 
                  <strong className="font-medium text-primary"> excelência</strong>, 
                  <strong className="font-medium text-secondary"> sustentabilidade</strong> e 
                  <strong className="font-medium text-accent"> foco no cliente</strong>.
                </p>
                <p className="text-base sm:text-lg font-gotham font-light leading-7 sm:leading-8 text-muted-foreground mb-6 sm:mb-8">
                  Acreditamos firmemente em ser mais do que uma simples revenda, 
                  <strong className="font-medium text-primary"> inspirando pessoas a fazer o bem</strong>.
                </p>
                <Button asChild className="font-gotham font-medium w-full sm:w-auto">
                  <Link to="/quem-somos">
                    Conheça Nossa História
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative order-1 lg:order-2">
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
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-elegant">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-gotham font-bold tracking-tight mb-4">
                Marcas que Distribuímos
              </h2>
              <p className="text-base sm:text-lg font-gotham font-light text-muted-foreground">
                Representamos com orgulho as principais marcas da Ambev
              </p>
            </div>

            {/* Featured Brand Logos - Mobile Responsive */}
            <div className="relative mb-12 sm:mb-16">
              <div className="flex justify-start sm:justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 overflow-x-auto pb-4 px-2 sm:px-0">
                {brandLogos.map((brand) => (
                  <div
                    key={brand.name}
                    className="flex-shrink-0 group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 min-w-[140px] sm:min-w-[180px] lg:min-w-[200px]"
                  >
                    <div className="p-4 sm:p-6 text-center">
                      <div className="h-16 sm:h-20 lg:h-24 w-full flex items-center justify-center mb-3 sm:mb-4 overflow-hidden rounded-lg sm:rounded-xl">
                        <img 
                          src={brand.image} 
                          alt={`${brand.name} logo`}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <h3 className="text-sm sm:text-base lg:text-lg font-gotham font-medium text-foreground">{brand.name}</h3>
                    </div>
                    <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-elegant mb-8 sm:mb-12">
              <img
                src={brandsShowcase}
                alt="Marcas distribuídas pela Cervantes"
                className="w-full h-48 sm:h-56 lg:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {brands.map((brand) => (
                <div
                  key={brand}
                  className="group relative overflow-hidden rounded-lg sm:rounded-xl bg-card p-3 sm:p-4 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 text-center"
                >
                  <div className="mb-2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-primary text-white text-sm sm:text-lg font-bold mx-auto font-gotham">
                    {brand.charAt(0)}
                  </div>
                  <h3 className="text-xs sm:text-sm font-gotham font-medium px-1">{brand}</h3>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <Button variant="outline" asChild className="font-gotham font-medium w-full sm:w-auto">
                <Link to="/marcas">
                  Ver Todas as Marcas
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-gotham font-bold tracking-tight mb-4">
                Nossos Valores
              </h2>
              <p className="text-base sm:text-lg font-gotham font-light text-muted-foreground">
                Os pilares que guiam nossa jornada há mais de três décadas
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
              <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300 border-t-4 border-t-primary">
                <CardHeader className="text-center p-4 sm:p-6">
                  <div className="rounded-full bg-primary/10 p-2 sm:p-3 w-fit mx-auto mb-3 sm:mb-4">
                    <Target className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-gotham font-medium">Missão</CardTitle>
                </CardHeader>
                <CardContent className="text-center p-4 sm:p-6 pt-0 sm:pt-0">
                  <p className="text-sm sm:text-base text-muted-foreground font-gotham font-light leading-relaxed">
                    Distribuir produtos de qualidade com excelência operacional, 
                    construindo relacionamentos duradouros e contribuindo para 
                    o desenvolvimento da região Norte de Minas.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300 border-t-4 border-t-secondary">
                <CardHeader className="text-center p-4 sm:p-6">
                  <div className="rounded-full bg-secondary/10 p-2 sm:p-3 w-fit mx-auto mb-3 sm:mb-4">
                    <Eye className="h-6 w-6 sm:h-8 sm:w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-gotham font-medium">Visão</CardTitle>
                </CardHeader>
                <CardContent className="text-center p-4 sm:p-6 pt-0 sm:pt-0">
                  <p className="text-sm sm:text-base text-muted-foreground font-gotham font-light leading-relaxed">
                    Ser a distribuidora de bebidas mais confiável e inovadora 
                    do Norte de Minas, reconhecida pela excelência no atendimento 
                    e sustentabilidade.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300 border-t-4 border-t-accent">
                <CardHeader className="text-center p-4 sm:p-6">
                  <div className="rounded-full bg-accent/10 p-2 sm:p-3 w-fit mx-auto mb-3 sm:mb-4">
                    <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-gotham font-medium">Sonho</CardTitle>
                </CardHeader>
                <CardContent className="text-center p-4 sm:p-6 pt-0 sm:pt-0">
                  <p className="text-sm sm:text-base text-muted-foreground font-gotham font-light leading-relaxed">
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
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-hero">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-gotham font-bold tracking-tight text-white mb-4 sm:mb-6">
                Pronto para Fazer Parte da Nossa História?
              </h2>
              <p className="text-lg sm:text-xl font-gotham font-light text-white/90 mb-8 sm:mb-10">
                Seja nosso cliente ou integre nossa equipe. Juntos, continuamos 
                construindo o futuro do Norte de Minas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild className="font-gotham font-medium w-full sm:w-auto">
                  <Link to="/seja-cliente">
                    <span className="hidden sm:inline">Quer ser nosso cliente?</span>
                    <span className="sm:hidden">Seja Cliente</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-gotham font-medium w-full sm:w-auto" asChild>
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
