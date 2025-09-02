import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppFloatProps {
  phoneNumber?: string;
  message?: string;
}

export default function WhatsAppFloat({ 
  phoneNumber = "5544330063000", 
  message = "Olá! Gostaria de mais informações." 
}: WhatsAppFloatProps) {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className={cn(
          "group relative flex h-14 w-14 items-center justify-center rounded-full",
          "bg-primary text-primary-foreground shadow-lg",
          "transition-all duration-300 ease-out",
          "hover:scale-110 hover:shadow-xl",
          "focus:outline-none focus:ring-4 focus:ring-primary/20",
          "animate-pulse hover:animate-none"
        )}
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        
        {/* Pulse rings */}
        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-10 animation-delay-1000" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 hidden group-hover:block">
          <div className="whitespace-nowrap rounded-lg bg-card px-3 py-2 text-sm font-medium text-card-foreground shadow-lg border">
            Falar no WhatsApp
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-card" />
          </div>
        </div>
      </button>
    </div>
  );
}