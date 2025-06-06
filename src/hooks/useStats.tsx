
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface Stats {
  totalPosts: number;
  lostPets: number;
  foundPets: number;
  reunited: number;
}

export const useStats = () => {
  const [stats, setStats] = useState<Stats>({
    totalPosts: 0,
    lostPets: 0,
    foundPets: 0,
    reunited: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch total posts
        const { count: totalPosts } = await supabase
          .from('posts')
          .select('*', { count: 'exact', head: true });

        // Fetch posts by status
        const { data: postsByStatus } = await supabase
          .from('posts')
          .select('status');

        const lostPets = postsByStatus?.filter(p => p.status === 'lost').length || 0;
        const foundPets = postsByStatus?.filter(p => p.status === 'found').length || 0;
        const reunited = postsByStatus?.filter(p => p.status === 'owner_found').length || 0;

        setStats({
          totalPosts: totalPosts || 0,
          lostPets,
          foundPets,
          reunited
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return { stats, loading };
};
