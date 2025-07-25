import React, { useEffect, useState} from 'react'
import { router, usePage } from '@inertiajs/react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import UpdatePost from '@/Components/Dashboard/Post/UpdatePost';

export default function PostList({ notify }) {
    const { posts } = usePage().props;
    const [postsList, setPostsList] = useState(posts || []);
    const [updatePost, setUpdatePost] = useState(null);

    useEffect(() => {
        if (Array.isArray(posts)) {
            setPostsList(posts);
        }
    }, [posts]);

    // État pour suivre la page actuelle    
    const [page, setPage] = useState(1);

    // Nombre d'articles par page
    const postsPerPage = 8;

    // Fonction pour filtrer les articles à afficher sur la page actuelle
    const getPaginatedArticles = () => {
        const startIndex = (page - 1) * postsPerPage;
        const endIndex = startIndex + postsPerPage;
        return postsList.slice(startIndex, endIndex);
    };

    // Calcul du nombre total de pages
    const totalPages = postsList?.length ? Math.ceil(postsList.length / postsPerPage) : 1;

    // Fonction pour passer à la page suivante
    const nextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    // Fonction pour passer à la page précédente
    const prevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    //fonction pour tronquer la taille du texte ou du titre pour ne pas avoir un tableau avec trop de texte
    const truncateContent = (content, maxLength) => {
        if (!content || typeof content !== 'string') return '';
        return content.length > maxLength
            ? content.substring(0, maxLength) + '...'
            : content;
    };

    // update d'un article
    const handleEdit = (post) => {
        if (updatePost?.id === post.id) {
            setUpdatePost(null); // fermer le formulaire si on reclique
        } else {
            setUpdatePost(post); // ouvrir pour ce post
        }
    }

    const handleCancel = () => {
        setUpdatePost(null); // Ferme le formulaire
    };

    // suppression d'un article
    const handleDelete = (post) => {       
        const isConfirmed = window.confirm(`Voulez-vous vraiment supprimer cet article ?`);
        if (!isConfirmed) return;

        router.delete(route('post.destroy', post), {
            onSuccess: () => {
                notify('deleted');
                
                // Supprimer de l'état local pour mise à jour immédiate
                setPostsList(prev => prev.filter(item => item.id !== post.id));
            },
            onError: (errors) => {
                console.error('Erreur Inertia :', errors);
            }
        }); 
    }

  return (
    <>
        <div>
            <table className="table-auto w-full border border-gray-300 text-sm text-left">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Date</th>
                        <th className="border border-gray-300 px-4 py-2">Titre</th>
                        <th className="border border-gray-300 px-4 py-2">Auteur</th>
                        <th className="border border-gray-300 px-4 py-2">Image</th>
                        <th className="border border-gray-300 px-4 py-2">Contenu</th>
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {getPaginatedArticles().map((post) => (
                        post && (
                            <React.Fragment key={post.id}>
                                <tr key={post.id}>
                                    <td className="border border-gray-300 px-4 py-2">{new Date(post.created_at).toLocaleDateString('fr-FR')}</td>
                                    <td className="border border-gray-300 px-4 py-2">{truncateContent(post.title, 50)}</td>
                                    <td className="border border-gray-300 px-4 py-2">{post.author}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <img className="post-image" src={post.image} alt='Image actu' />
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">{truncateContent(post.content, 150)}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <div className="flex items-stretch gap-2 h-full">
                                            <button className="button-edit" onClick={() => handleEdit(post)}>
                                                <img src="/assets/icones/edit-button.png" alt="button edit" />
                                            </button>
                                            <button className="button-delete" onClick={() => handleDelete(post)}>
                                                <img src="/assets/icones/delete-button.png" alt="button delete" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                {updatePost?.id === post.id && (
                                    <UpdatePost 
                                        post={post}
                                        onCancel={handleCancel}
                                        notify={notify}
                                    />
                                )}
                            </React.Fragment>
                        )
                    ))}
                </tbody>
            </table>
        </div>
        <div className='flex justify-center gap-8 mt-6'>
            {/* Affichage des boutons de pagination */}
            {page != 1 && (
                <button className='prev-button' onClick={prevPage}>Page précédente</button>
            )}
            {page < totalPages && (
                    <button className='next-button' onClick={nextPage}>Page suivante</button>
            )}
        </div>
    </>
  )
}
