
import logoImage from '@/assets/images/logo.png';

interface LogoProcessorProps {
  mobile?: boolean;
}

export const LogoProcessor = ({ mobile = false }: LogoProcessorProps) => {
  return (
    <img
      src={logoImage}
      alt="Cervantes Distribuidora"
      className="w-full h-full object-contain"
    />
  );
};
