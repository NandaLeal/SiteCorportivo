
import { useEffect, useState } from 'react';
import { removeBackground, loadImageFromUrl } from '@/lib/backgroundRemoval';
import { cn } from '@/lib/utils';
import logoImage from '@/assets/images/logo.png';

interface LogoProcessorProps {
  mobile?: boolean;
}

export const LogoProcessor = ({ mobile = false }: LogoProcessorProps) => {
  const [processedLogoUrl, setProcessedLogoUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const processLogo = async () => {
      setIsProcessing(true);
      setError(false);
      try {
        const img = await loadImageFromUrl(logoImage);
        const processedBlob = await removeBackground(img);
        const url = URL.createObjectURL(processedBlob);
        setProcessedLogoUrl(url);
      } catch (error) {
        console.error('Error processing logo:', error);
        setError(true);
        // Fallback to original logo
        setProcessedLogoUrl(logoImage);
      } finally {
        setIsProcessing(false);
      }
    };

    processLogo();
  }, []);

  return (
    <img
      src={processedLogoUrl || logoImage}
      alt="Cervantes Distribuidora"
      className={cn(
        "w-full h-full object-contain transition-opacity duration-300",
        isProcessing && !error ? 'opacity-50' : 'opacity-100',
        // Ensure the logo maintains proper contrast and visibility
        "filter brightness-100 contrast-100"
      )}
      style={{
        // Prevent any CSS filters that might cause the black appearance
        filter: error ? 'none' : undefined
      }}
      onError={() => setError(true)}
    />
  );
};
