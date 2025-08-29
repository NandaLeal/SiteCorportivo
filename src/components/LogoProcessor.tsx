import { useEffect, useState } from 'react';
import { removeBackground, loadImageFromUrl } from '@/lib/backgroundRemoval';
import logoImage from '@/assets/images/logo.png';

interface LogoProcessorProps {
  mobile?: boolean;
}

export const LogoProcessor = ({ mobile = false }: LogoProcessorProps) => {
  const [processedLogoUrl, setProcessedLogoUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const processLogo = async () => {
      setIsProcessing(true);
      try {
        const img = await loadImageFromUrl(logoImage);
        const processedBlob = await removeBackground(img);
        const url = URL.createObjectURL(processedBlob);
        setProcessedLogoUrl(url);
      } catch (error) {
        console.error('Error processing logo:', error);
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
      className={`${mobile ? 'h-10' : 'h-14'} w-auto transition-opacity duration-300 ${isProcessing ? 'opacity-50' : 'opacity-100'}`}
    />
  );
};
