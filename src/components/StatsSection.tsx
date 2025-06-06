
import { useStats } from '@/hooks/useStats';
import StatCard from './StatCard';

const StatsSection = () => {
  const { stats, loading } = useStats();

  if (loading) {
    return (
      <section className="py-16 bg-white">
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
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 rounded-2xl h-32"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
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
          <StatCard
            value={stats.totalPosts}
            title="Publicações"
            subtitle="Total de posts criados"
            bgColor="bg-blue-100"
            textColor="text-blue-800"
          />
          
          <StatCard
            value={stats.lostPets}
            title="Pets Perdidos"
            subtitle="Ainda procurando"
            bgColor="bg-red-100"
            textColor="text-red-800"
          />
          
          <StatCard
            value={stats.foundPets}
            title="Pets Encontrados"
            subtitle="Aguardando o dono"
            bgColor="bg-yellow-100"
            textColor="text-yellow-800"
          />
          
          <StatCard
            value={stats.reunited}
            title="Reuniões"
            subtitle="Famílias reunidas"
            bgColor="bg-green-100"
            textColor="text-green-800"
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
