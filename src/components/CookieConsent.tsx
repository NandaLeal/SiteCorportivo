import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Cookie, X } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'cervantes-cookie-consent';

type ConsentStatus = 'accepted' | 'rejected' | null;

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY) as ConsentStatus;
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-4xl mx-auto bg-background border border-border rounded-xl shadow-2xl p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          {/* Icon and Text */}
          <div className="flex items-start gap-3 flex-1">
            <div className="p-2 bg-primary/10 rounded-lg shrink-0">
              <Cookie className="w-6 h-6 text-primary" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-foreground">
                Utilizamos cookies
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Este site utiliza cookies para garantir a melhor experiência de navegação. 
                Ao continuar, você concorda com nossa{' '}
                <Link 
                  to="/privacidade" 
                  className="text-primary hover:underline font-medium"
                >
                  Política de Privacidade
                </Link>
                {' '}e com o uso de cookies conforme a LGPD.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Button
              variant="outline"
              onClick={handleReject}
              className="flex-1 md:flex-none"
            >
              Recusar
            </Button>
            <Button
              onClick={handleAccept}
              className="flex-1 md:flex-none bg-primary hover:bg-primary/90"
            >
              Aceitar cookies
            </Button>
          </div>

          {/* Close button for mobile */}
          <button
            onClick={handleReject}
            className="absolute top-2 right-2 md:hidden p-1 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
