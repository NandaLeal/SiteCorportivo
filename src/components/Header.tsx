
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Package, Users, Award, UserPlus, Briefcase, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LogoProcessor } from "./LogoProcessor";

const navigation = [
  { name: "Início", href: "/", icon: Package },
  { name: "Quem Somos", href: "/quem-somos", icon: Users },
  { name: "Marcas", href: "/marcas", icon: Award },
  { name: "Seja Nosso Cliente", href: "/seja-cliente", icon: UserPlus },
  { name: "Trabalhe Conosco", href: "/trabalhe-conosco", icon: Briefcase },
  { name: "Contato", href: "/contato", icon: Phone },
];

const BeerBoxNavItem = ({ item, isActive, onClick }: { 
  item: typeof navigation[0], 
  isActive: boolean, 
  onClick?: () => void 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = item.icon;

  const handleClick = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
      onClick?.();
    }, 300);
  };

  return (
    <Link
      to={item.href}
      onClick={handleClick}
      className="group relative block transform transition-all duration-300 hover:scale-105"
    >
      <div className={cn(
        "relative perspective-1000 transform-style-preserve-3d transition-transform duration-300",
        isOpen && "rotate-y-12"
      )}>
          {/* Caixa de Cerveja */}
        <div className={cn(
          "relative h-12 w-20 rounded-lg shadow-lg transform transition-all duration-300",
          "bg-primary hover:bg-primary/90 group-hover:bg-accent",
          isActive && "ring-2 ring-primary ring-offset-2 bg-accent",
          isOpen && "shadow-xl scale-110"
        )}>
          {/* Frente da caixa */}
          <div className={cn(
            "absolute inset-0 flex flex-col items-center justify-center rounded-lg transition-colors duration-300",
            "text-primary-foreground group-hover:text-accent-foreground",
            isActive && "text-accent-foreground"
          )}>
            <Icon className="h-4 w-4 mb-1" />
            <span className="text-xs font-ambev-alpha-1 leading-tight text-center px-1">
              {item.name}
            </span>
          </div>
          
          {/* Efeito de abertura */}
          {isOpen && (
            <div className="absolute inset-0 bg-white/20 rounded-lg animate-pulse" />
          )}
          
          {/* Sombra interna */}
          <div className="absolute inset-0 rounded-lg shadow-inner bg-black/10" />
        </div>
      </div>
    </Link>
  );
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border shadow-soft">
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-2 px-3 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 -ml-2">
          <Link to="/" className="-m-1.5 p-1.5">
            <div className="h-12 w-24 sm:h-16 sm:w-32">
              <LogoProcessor/>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="sm"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Abrir menu</span>
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-4 xl:gap-x-6 lg:items-center">
          {navigation.map((item) => (
            <BeerBoxNavItem
              key={item.name}
              item={item}
              isActive={location.pathname === item.href}
            />
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button variant="default" asChild className="px-3 py-2 text-sm xl:px-4">
            <Link to="/seja-cliente">Seja Nosso Cliente</Link>
          </Button>
        </div>
      </nav>
      
      {/* Mobile menu - Horizontal tabs */}
      <div className={cn(
        "lg:hidden",
        mobileMenuOpen ? "fixed inset-0 z-[9999]" : "hidden"
      )}>
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Horizontal Navigation Tabs */}
        <div className="fixed top-0 left-0 right-0 z-[9999] bg-white border-b border-border shadow-lg">
          <div className="px-4 pt-0 pb-3">
            {/* Close button */}
            <div className="flex justify-end mb-3">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">Fechar menu</span>
              </Button>
            </div>
            
            {/* Horizontal Navigation */}
            <div className="flex flex-wrap gap-2 justify-center">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex flex-col items-center gap-1 rounded-lg px-3 py-2 min-w-[70px] text-xs font-medium transition-colors",
                      isActive 
                        ? "bg-primary text-primary-foreground shadow-md" 
                        : "text-muted-foreground hover:bg-muted hover:text-foreground bg-muted/30"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-center leading-tight">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
