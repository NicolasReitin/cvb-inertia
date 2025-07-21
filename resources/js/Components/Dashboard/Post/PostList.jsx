import {React, useEffect, useState} from 'react'
import axios from '@/libs/axios';
import { usePage } from '@inertiajs/react';


export default function PostList() {
    const { posts } = usePage().props; // ← protège contre undefined
    const [postsList, setPostsList] = useState(posts || []);

    useEffect(() => {
        if (Array.isArray(posts)) {
            setPostsList(posts);
        }
    }, [posts]);

    const [page, setPage] = useState(1); // État pour suivre la page actuelle

    const postsPerPage = 8; // Nombre d'articles par page

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

    const handleEdit = (post) => {
        // console.log(actualite);  
    }

    const handleDelete = (post) => {
        // const isConfirmed = window.confirm(`Voulez-vous vraiment supprimer cet article ?`);
        // if (isConfirmed) {
        //     const fetchDeleteActualite = async() => {
        //         try{
        //             await axios.delete(`/api/actualite/${post.id}`, post)
        //             setPostsList(prevActualites => prevActualites.filter(item => item.id !== post.id)); // filtre de l'item qui vient d'etre supprimé afin de reactualiser la liste en dropant la ligne supprimée...
        //         } catch (err) {
        //             console.error(err);
        //         }
        //     }    
        //     fetchDeleteActualite(); 
        // }
    }

  return (
    <>
        <div className="test">
        <table className="table-auto w-full border border-gray-300 text-sm text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-4 py-2">Titre</th>
                <th className="border border-gray-300 px-4 py-2">Auteur</th>
                <th className="border border-gray-300 px-4 py-2">Photo</th>
                <th className="border border-gray-300 px-4 py-2">Contenu</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
                {getPaginatedArticles().map((post) => (
                    post && (
                    <tr key={post.id}>
                        <td className="border border-gray-300 px-4 py-2">{new Date(post.created_at).toLocaleDateString('fr-FR')}</td>
                        <td className="border border-gray-300 px-4 py-2">{truncateContent(post.title, 50)}</td>
                        <td className="border border-gray-300 px-4 py-2">{post.author}</td>
                        <td className="border border-gray-300 px-4 py-2">
                            <img className="post-image" src={post.photo} alt='Photo actu' />
                        </td>
                        <td className="border border-gray-300 px-4 py-2">{truncateContent(post.content, 150)}</td>
                        <td className="border border-gray-300 px-4 py-2">
                            <div className="flex items-stretch gap-2 h-full">
                                <button className="button-edit">
                                    <img src="/assets/icones/edit-button.png" alt="button edit" />
                                </button>
                                <button className="button-delete">
                                    <img src="/assets/icones/delete-button.png" alt="button delete" />
                                </button>
                            </div>
                        </td>
                    </tr>
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
