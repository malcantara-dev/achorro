
import { useCountUp } from '@/hooks/useCountUp';

interface StatCardProps {
  value: number;
  title: string;
  subtitle: string;
  bgColor: string;
  textColor: string;
}

const StatCard = ({ value, title, subtitle, bgColor, textColor }: StatCardProps) => {
  const animatedValue = useCountUp({ end: value, duration: 2500 });

  const formatNumber = (num: number) => {
    return num.toLocaleString('pt-BR');
  };

  return (
    <div className={`text-center p-6 ${bgColor} rounded-2xl`}>
      <div className={`text-4xl font-bold ${textColor} mb-2`}>
        {formatNumber(animatedValue)}
      </div>
      <div className="text-lg font-medium text-gray-700">{title}</div>
      <div className="text-sm text-gray-500 mt-1">{subtitle}</div>
    </div>
  );
};

export default StatCard;
