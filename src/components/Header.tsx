import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LogoProcessor } from "./LogoProcessor";

const navigation = [
  { name: "Início", href: "/" },
  { name: "Quem Somos", href: "/quem-somos" },
  { name: "Marcas", href: "/marcas" },
  { name: "Trabalhe Conosco", href: "/trabalhe-conosco" },
  { name: "Contato", href: "/contato" },
];
  
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
        <div className="hidden lg:flex lg:gap-x-6 xl:gap-x-8 lg:items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === item.href 
                  ? "text-primary" 
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/seja-cliente"
            className="px-4 py-2 rounded-lg border border-orange-500 bg-white text-orange-500 hover:bg-orange-500 hover:text-white transition text-sm font-medium"
          >
            Seja Nosso Cliente
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={cn(
        "lg:hidden",
        mobileMenuOpen ? "fixed inset-0 z-[99999]" : "hidden"
      )}>
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Horizontal Navigation Tabs */}
        <div className="fixed top-0 left-0 right-0 z-[99999] bg-white border-b border-border shadow-lg">
          <div className="px-4 pt-3 pb-3">
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
            <div className="flex flex-wrap gap-3 justify-center">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-colors",
                      isActive 
                        ? "text-primary" 
                        : "text-muted-foreground hover:text-primary"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
              {/* Botão "Seja Nosso Cliente" no mobile também */}
              <Link
                to="/seja-cliente"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Seja Nosso Cliente
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

