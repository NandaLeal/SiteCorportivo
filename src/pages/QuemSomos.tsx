import { Building2, Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import companyImage from "@/assets/fachada.jpg";

export default function QuemSomos() {
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
                Quem Somos
              </h1>
              <p className="text-lg leading-8 text-muted-foreground">
                +30 anos de tradição, inovação e compromisso com a excelência no Norte de Minas
              </p>
            </div>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="py-24 sm:py-32 bg-gradient-elegant">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
              <div className="lg:pr-4">
                <div className="relative overflow-hidden rounded-3xl bg-background px-6 pb-9 pt-64 shadow-card sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src={companyImage}
                    alt="Sede da Distribuidora Cervantes"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40" />
                  <div className="relative">
                    <Building2 className="h-7 w-7 text-primary" />
                    <blockquote className="mt-6 text-xl font-medium leading-8 text-foreground">
                      <p>"Mais do que uma distribuidora, somos parceiros no crescimento do Norte de Minas."</p>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-base leading-7 text-muted-foreground lg:max-w-lg">
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Nossa História</h2>
                  <div className="max-w-xl">
                    <p className="mt-6">
                      Somos a <strong className="font-semibold text-foreground">Distribuidora de Bebidas Cervantes</strong>, 
                      atuando há <strong className="font-semibold text-primary">31 anos</strong> em Montes Claros e em mais de 
                      <strong className="font-semibold text-primary"> 30 cidades do Norte de Minas</strong>. 
                    </p>
                    <p className="mt-8">
                      Como <strong className="font-semibold text-secondary">representantes oficiais da Ambev</strong> em nossa região, 
                      acreditamos firmemente em ser mais do que uma simples revenda. Nossa missão vai além da distribuição - 
                      <strong className="font-semibold text-accent"> inspiramos pessoas a fazer o bem</strong>.
                    </p>
                    <p className="mt-8">
                      Com uma frota moderna e equipe especializada, garantimos que nossos produtos cheguem com qualidade e 
                      pontualidade a todos os cantos da região, fortalecendo negócios e criando oportunidades.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Nossos Valores</h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Os pilares que guiam nossa jornada há mais de três décadas
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
              <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300">
                <CardContent className="flex flex-col items-center text-center p-8">
                  <div className="rounded-full bg-primary/10 p-3 mb-6">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Missão</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Distribuir produtos de qualidade com excelência operacional, 
                    construindo relacionamentos duradouros e contribuindo para 
                    o desenvolvimento da região Norte de Minas.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300">
                <CardContent className="flex flex-col items-center text-center p-8">
                  <div className="rounded-full bg-secondary/10 p-3 mb-6">
                    <Eye className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Visão</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ser a distribuidora de bebidas mais confiável e inovadora 
                    do Norte de Minas, reconhecida pela excelência no atendimento 
                    e sustentabilidade.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300">
                <CardContent className="flex flex-col items-center text-center p-8">
                  <div className="rounded-full bg-accent/10 p-3 mb-6">
                    <Heart className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Sonho</h3>
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
      </main>
      <Footer />
    </>
  );
}
