import { useStats } from '@/hooks/useStats';
import StatCard from './StatCard';
const StatsSection = () => {
  const {
    stats,
    loading
  } = useStats();
  if (loading) {
    return <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossos Números
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja o impacto que estamos fazendo juntos na reunião de pets com suas famílias
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map(i => <div key={i} className="animate-pulse">
                <div className="bg-gray-200 rounded-2xl h-32"></div>
              </div>)}
          </div>
        </div>
      </section>;
  }
  return;
};
export default StatsSection;