
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Edit, Trash2, Shield } from 'lucide-react';
import { useUserRole } from '@/hooks/useUserRole';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface AdminActionsProps {
  postId: string;
  postUserId: string;
  currentStatus: string;
  onStatusUpdate?: () => void;
  onDelete?: () => void;
  className?: string;
}

const AdminActions: React.FC<AdminActionsProps> = ({
  postId,
  postUserId,
  currentStatus,
  onStatusUpdate,
  onDelete,
  className = ''
}) => {
  const { isAdmin, isModerator } = useUserRole();
  const { toast } = useToast();

  if (!isAdmin && !isModerator) {
    return null;
  }

  const handleDeletePost = async () => {
    if (!window.confirm('Tem certeza que deseja deletar esta publicação?')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('posts')
        .delete()
        .eq('id', postId);

      if (error) throw error;

      toast({
        title: 'Publicação deletada',
        description: 'A publicação foi deletada com sucesso.',
      });

      if (onDelete) onDelete();
    } catch (error) {
      console.error('Error deleting post:', error);
      toast({
        title: 'Erro ao deletar',
        description: 'Não foi possível deletar a publicação.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
        <Shield className="h-3 w-3 mr-1" />
        {isAdmin ? 'Admin' : 'Moderador'}
      </Badge>
      
      <Button
        size="sm"
        variant="outline"
        onClick={handleDeletePost}
        className="text-red-600 hover:text-red-700 hover:bg-red-50"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default AdminActions;
