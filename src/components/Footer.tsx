import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle, Linkedin, Video } from "lucide-react";
import logoFundo from '@/assets/images/logo.png';

const footerNavigation = {
  empresa: [
    { name: "Quem Somos", href: "/quem-somos" },
    { name: "Marcas", href: "/marcas" },
    { name: "Trabalhe Conosco", href: "/trabalhe-conosco" },
  ],
  cliente: [
    { name: "Seja Nosso Cliente", href: "/seja-cliente" },
    { name: "Contato", href: "/contato" },
    { name: "Política de Privacidade", href: "/privacidade" },
  ],
  social: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/cervantes.ambev/",
      icon: Instagram,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/CervantesAmbev/",
      icon: Facebook,
    },
    {
      name: "WhatsApp",
      href: "http://wa.me/553832131234?text= Seja bem-vindo a maior revenda no Norte de Minas.",
      icon: MessageCircle,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/distribuidora-de-bebidas-cervantes-ambev-609b8a246/",
      icon: Linkedin,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gradient-elegant border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6 pt-16 sm:pt-20 lg:pt-24">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-6 sm:space-y-8 mb-12 xl:mb-0">
            <Link to="/" className="inline-block">
              <img 
                src={logoFundo}
                alt="Cervantes Distribuidora"
                className="h-12 w-48 sm:h-16 sm:w-64 object-contain"
              />
            </Link>
            <p className="text-sm leading-6 text-muted-foreground max-w-sm">
              Há 31 anos levando qualidade e confiança para Montes Claros e mais 30 cidades do Norte de Minas!
              Representantes oficiais da Ambev em nossa região.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-lg"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-12 sm:grid-cols-2 xl:col-span-2 xl:mt-0">
            <div className="grid grid-cols-1 gap-8 sm:gap-12 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground mb-4 sm:mb-6">Empresa</h3>
                <ul role="list" className="space-y-3 sm:space-y-4">
                  {footerNavigation.empresa.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground mb-4 sm:mb-6">Cliente</h3>
                <ul role="list" className="space-y-3 sm:space-y-4">
                  {footerNavigation.cliente.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground mb-4 sm:mb-6">Contato</h3>
              <ul role="list" className="space-y-3 sm:space-y-4">
                <li className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    Montes Claros - MG<br />
                    Norte de Minas Gerais
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  <a
                    href="tel:+553832131234"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    (38) 3213-1234
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  <a
                    href="mailto:contato@cervantes.com.br"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    contato@cervantes.com.br
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-6 sm:mt-16 sm:pt-8 lg:mt-20">
          <p className="text-xs leading-5 text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Distribuidora de Bebidas Cervantes. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
