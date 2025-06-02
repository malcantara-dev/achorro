
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Calendar, ArrowLeft, Edit, Trash2, Send } from 'lucide-react';
import Footer from '@/components/Footer';
import type { Database } from '@/integrations/supabase/types';

type AnimalType = Database['public']['Enums']['animal_type'];
type PostStatus = Database['public']['Enums']['post_status'];

interface Post {
  id: string;
  title: string;
  description: string;
  animal_type: AnimalType;
  status: PostStatus;
  main_photo_url: string;
  additional_photos: string[] | null;
  created_at: string;
  user_id: string;
  locations: {
    city: string;
    state: string;
  };
  author_name?: string;
}

interface Comment {
  id: string;
  content: string;
  created_at: string;
  updated_at: string;
  user_id: string;
  post_id: string;
  author_name?: string;
}

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [editingComment, setEditingComment] = useState<string | null>(null);
  const [editContent, setEditContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [submittingComment, setSubmittingComment] = useState(false);

  useEffect(() => {
    if (id) {
      fetchPost();
      fetchComments();
    }
  }, [id]);

  const fetchPost = async () => {
    if (!id) return;

    const { data, error } = await supabase
      .from('posts')
      .select(`
        *,
        locations!inner (
          city,
          state
        )
      `)
      .eq('id', id)
      .single();

    if (error) {
      toast({
        title: 'Erro ao carregar publicação',
        description: error.message,
        variant: 'destructive',
      });
      navigate('/publicacoes');
      return;
    }

    // Fetch author name
    const { data: profile } = await supabase
      .from('profiles')
      .select('name')
      .eq('id', data.user_id)
      .single();

    setPost({
      ...data,
      author_name: profile?.name || 'Usuário'
    });
    setLoading(false);
  };

  const fetchComments = async () => {
    if (!id) return;

    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('post_id', id)
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Error fetching comments:', error);
      return;
    }

    // Fetch author names for comments
    const commentsWithAuthors = await Promise.all(
      (data || []).map(async (comment) => {
        const { data: profile } = await supabase
          .from('profiles')
          .select('name')
          .eq('id', comment.user_id)
          .single();

        return {
          ...comment,
          author_name: profile?.name || 'Usuário'
        };
      })
    );

    setComments(commentsWithAuthors);
  };

  const handleStatusChange = async (newStatus: PostStatus) => {
    if (!post || !user || post.user_id !== user.id) return;

    const { error } = await supabase
      .from('posts')
      .update({ status: newStatus })
      .eq('id', post.id);

    if (error) {
      toast({
        title: 'Erro ao atualizar status',
        description: error.message,
        variant: 'destructive',
      });
      return;
    }

    setPost({ ...post, status: newStatus });
    toast({
      title: 'Status atualizado',
      description: 'O status da publicação foi atualizado com sucesso.',
    });
  };

  const handleSubmitComment = async () => {
    if (!user || !newComment.trim() || !post) return;

    setSubmittingComment(true);

    const { error } = await supabase
      .from('comments')
      .insert({
        content: newComment.trim(),
        post_id: post.id,
        user_id: user.id,
      });

    if (error) {
      toast({
        title: 'Erro ao adicionar comentário',
        description: error.message,
        variant: 'destructive',
      });
    } else {
      setNewComment('');
      fetchComments();
      toast({
        title: 'Comentário adicionado',
        description: 'Seu comentário foi adicionado com sucesso.',
      });
    }

    setSubmittingComment(false);
  };

  const handleEditComment = async (commentId: string) => {
    if (!editContent.trim()) return;

    const { error } = await supabase
      .from('comments')
      .update({
        content: editContent.trim(),
        updated_at: new Date().toISOString(),
      })
      .eq('id', commentId);

    if (error) {
      toast({
        title: 'Erro ao editar comentário',
        description: error.message,
        variant: 'destructive',
      });
    } else {
      setEditingComment(null);
      setEditContent('');
      fetchComments();
      toast({
        title: 'Comentário editado',
        description: 'Seu comentário foi editado com sucesso.',
      });
    }
  };

  const handleDeleteComment = async (commentId: string) => {
    const { error } = await supabase
      .from('comments')
      .delete()
      .eq('id', commentId);

    if (error) {
      toast({
        title: 'Erro ao deletar comentário',
        description: error.message,
        variant: 'destructive',
      });
    } else {
      fetchComments();
      toast({
        title: 'Comentário deletado',
        description: 'O comentário foi deletado com sucesso.',
      });
    }
  };

  const canEditComment = (comment: Comment) => {
    return user && comment.user_id === user.id && post?.status !== 'owner_found';
  };

  const canDeleteComment = (comment: Comment) => {
    return user && (comment.user_id === user.id || post?.user_id === user.id) && post?.status !== 'owner_found';
  };

  const getStatusBadge = (status: PostStatus) => {
    const statusConfig = {
      lost: { label: 'Perdido', className: 'bg-red-100 text-red-800' },
      found: { label: 'Encontrado', className: 'bg-yellow-100 text-yellow-800' },
      owner_found: { label: 'Dono Encontrado', className: 'bg-green-100 text-green-800' },
    };

    const config = statusConfig[status];
    return (
      <Badge className={config?.className || 'bg-gray-100 text-gray-800'}>
        {config?.label || status}
      </Badge>
    );
  };

  const getAnimalTypeLabel = (type: AnimalType) => {
    const types = {
      dog: 'Cachorro',
      cat: 'Gato',
      bird: 'Pássaro',
      rabbit: 'Coelho',
      other: 'Outro',
    };
    return types[type] || type;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Publicação não encontrada</h2>
          <Button onClick={() => navigate('/publicacoes')}>
            Voltar às publicações
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Button
            variant="outline"
            onClick={() => navigate('/publicacoes')}
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar às publicações
          </Button>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={post.main_photo_url || '/placeholder.svg'}
                  alt={post.title}
                  className="w-full h-96 md:h-full object-cover"
                />
              </div>
              
              <div className="md:w-1/2 p-6">
                <div className="flex justify-between items-start mb-4">
                  <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
                  {getStatusBadge(post.status)}
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <span className="font-medium text-lg">
                      {getAnimalTypeLabel(post.animal_type)}
                    </span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{post.locations.city}, {post.locations.state}</span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{formatDate(post.created_at)}</span>
                  </div>

                  <div className="text-gray-600">
                    <span className="font-medium">Publicado por:</span> {post.author_name}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Descrição</h3>
                  <p className="text-gray-700 leading-relaxed">{post.description}</p>
                </div>

                {user && post.user_id === user.id && post.status === 'lost' && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Atualizar Status</h3>
                    <Select onValueChange={(value: PostStatus) => handleStatusChange(value)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Escolha o novo status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="found">Encontrado</SelectItem>
                        <SelectItem value="owner_found">Dono Encontrado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
            </div>

            {post.additional_photos && post.additional_photos.length > 0 && (
              <div className="p-6 border-t">
                <h3 className="text-lg font-semibold mb-4">Fotos Adicionais</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {post.additional_photos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`Foto adicional ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Comments Section */}
          <div className="mt-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">Comentários</h3>

                {user && post.status !== 'owner_found' && (
                  <div className="mb-6">
                    <Textarea
                      placeholder="Adicione um comentário..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="mb-3"
                    />
                    <Button
                      onClick={handleSubmitComment}
                      disabled={!newComment.trim() || submittingComment}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      {submittingComment ? 'Enviando...' : 'Comentar'}
                    </Button>
                  </div>
                )}

                {!user && (
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-600">
                      Faça login para comentar nesta publicação.
                    </p>
                  </div>
                )}

                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="border-b pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <span className="font-semibold">{comment.author_name}</span>
                          <span className="text-gray-500 text-sm ml-2">
                            {formatDate(comment.created_at)}
                            {comment.updated_at !== comment.created_at && ' (editado)'}
                          </span>
                        </div>
                        
                        {(canEditComment(comment) || canDeleteComment(comment)) && (
                          <div className="flex space-x-2">
                            {canEditComment(comment) && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => {
                                  setEditingComment(comment.id);
                                  setEditContent(comment.content);
                                }}
                              >
                                <Edit className="h-3 w-3" />
                              </Button>
                            )}
                            {canDeleteComment(comment) && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleDeleteComment(comment.id)}
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            )}
                          </div>
                        )}
                      </div>

                      {editingComment === comment.id ? (
                        <div>
                          <Textarea
                            value={editContent}
                            onChange={(e) => setEditContent(e.target.value)}
                            className="mb-2"
                          />
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              onClick={() => handleEditComment(comment.id)}
                              className="bg-green-600 hover:bg-green-700"
                            >
                              Salvar
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                setEditingComment(null);
                                setEditContent('');
                              }}
                            >
                              Cancelar
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <p className="text-gray-700">{comment.content}</p>
                      )}
                    </div>
                  ))}

                  {comments.length === 0 && (
                    <p className="text-gray-500 text-center py-8">
                      Nenhum comentário ainda. Seja o primeiro a comentar!
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetail;
