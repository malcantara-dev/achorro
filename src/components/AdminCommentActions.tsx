
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trash2, Shield } from 'lucide-react';
import { useUserRole } from '@/hooks/useUserRole';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface AdminCommentActionsProps {
  commentId: string;
  commentUserId: string;
  onDelete?: () => void;
  className?: string;
}

const AdminCommentActions: React.FC<AdminCommentActionsProps> = ({
  commentId,
  commentUserId,
  onDelete,
  className = ''
}) => {
  const { isAdmin, isModerator } = useUserRole();
  const { toast } = useToast();

  if (!isAdmin && !isModerator) {
    return null;
  }

  const handleDeleteComment = async () => {
    if (!window.confirm('Tem certeza que deseja deletar este comentário?')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('comments')
        .delete()
        .eq('id', commentId);

      if (error) throw error;

      toast({
        title: 'Comentário deletado',
        description: 'O comentário foi deletado com sucesso.',
      });

      if (onDelete) onDelete();
    } catch (error) {
      console.error('Error deleting comment:', error);
      toast({
        title: 'Erro ao deletar',
        description: 'Não foi possível deletar o comentário.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
        <Shield className="h-3 w-3 mr-1" />
        {isAdmin ? 'Admin' : 'Mod'}
      </Badge>
      
      <Button
        size="sm"
        variant="outline"
        onClick={handleDeleteComment}
        className="text-red-600 hover:text-red-700 hover:bg-red-50"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default AdminCommentActions;
