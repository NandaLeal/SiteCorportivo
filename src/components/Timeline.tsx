import { Building, Users, Award, Target, Star, Calendar, Truck, Globe } from "lucide-react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  gradient: string;
  textColor: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "1990",
    title: "Fundação da Cervantes",
    description: "Início das atividades como distribuidora de bebidas no Norte de Minas, com foco na qualidade e atendimento personalizado.",
    icon: Building,
    gradient: "from-blue-500 to-purple-600",
    textColor: "text-blue-600"
  },
  {
    year: "1995",
    title: "Parceria com a Ambev",
    description: "Tornamo-nos representantes oficiais da Ambev, expandindo nosso portfólio com as principais marcas do mercado.",
    icon: Users,
    gradient: "from-purple-500 to-pink-600",
    textColor: "text-purple-600"
  },
  {
    year: "2000",
    title: "Expansão Regional",
    description: "Ampliação da área de cobertura para 30+ cidades, consolidando nossa presença no Norte de Minas Gerais.",
    icon: Globe,
    gradient: "from-pink-500 to-red-600",
    textColor: "text-pink-600"
  },
  {
    year: "2010",
    title: "Modernização da Frota",
    description: "Investimento em tecnologia e logística, garantindo entregas mais eficientes e sustentáveis.",
    icon: Truck,
    gradient: "from-red-500 to-orange-600",
    textColor: "text-red-600"
  },
  {
    year: "2015",
    title: "Certificações de Qualidade",
    description: "Conquista de importantes certificações, reforçando nosso compromisso com a excelência operacional.",
    icon: Award,
    gradient: "from-orange-500 to-yellow-600",
    textColor: "text-orange-600"
  },
  {
    year: "2020",
    title: "Inovação Digital",
    description: "Implementação de sistemas digitais avançados e plataformas online para melhor atendimento aos clientes.",
    icon: Target,
    gradient: "from-yellow-500 to-green-600",
    textColor: "text-yellow-600"
  },
  {
    year: "2024",
    title: "Futuro Sustentável",
    description: "Lançamento de iniciativas sustentáveis e projetos sociais, inspirando pessoas a fazer o bem.",
    icon: Star,
    gradient: "from-green-500 to-teal-600",
    textColor: "text-green-600"
  }
];

export default function Timeline() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-subtle">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-gotham font-bold tracking-tight mb-6">
            Nossa Jornada
          </h2>
          <p className="text-lg sm:text-xl font-gotham font-light text-muted-foreground">
            Mais de 30 anos construindo história no Norte de Minas
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/20 via-secondary/30 to-accent/20 rounded-full"></div>

          {/* Timeline Events */}
          <div className="space-y-12 lg:space-y-16">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={event.year}
                  className={`relative flex items-center ${
                    isEven ? 'flex-row' : 'flex-row-reverse'
                  } group`}
                >
                  {/* Content Side */}
                  <div className={`w-5/12 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    {/* Year */}
                    <div className={`text-4xl sm:text-5xl lg:text-6xl font-gotham font-bold mb-4 ${event.textColor} animate-fade-in`}>
                      {event.year}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-gotham font-bold mb-3 text-foreground">
                      {event.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-base sm:text-lg font-gotham font-light text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Center Icon/Image */}
                  <div className="relative z-10 flex items-center justify-center">
                    {/* Connection Line */}
                    <div className={`absolute w-8 h-0.5 bg-gradient-to-r ${event.gradient} ${
                      isEven ? '-left-8' : '-right-8'
                    }`}></div>
                    
                    {/* Icon Container */}
                    <div className={`
                      relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${event.gradient} 
                      shadow-elegant hover:shadow-glow transition-all duration-500 
                      group-hover:scale-110 group-hover:rotate-6
                      flex items-center justify-center
                    `}>
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      
                      {/* Glow Effect */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
                    </div>
                  </div>

                  {/* Empty Side for Balance */}
                  <div className="w-5/12"></div>

                  {/* Background Decoration */}
                  <div className={`
                    absolute inset-0 -mx-4 sm:-mx-8 rounded-2xl bg-gradient-to-r ${event.gradient} 
                    opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10
                  `}></div>
                </div>
              );
            })}
          </div>

          {/* Bottom Decoration */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-primary rounded-full shadow-glow animate-pulse"></div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white rounded-full font-gotham font-medium shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105">
            <Calendar className="w-5 h-5" />
            <span>Continue essa história conosco</span>
          </div>
        </div>
      </div>
    </section>
  );
}