import {React, useEffect, useState} from 'react'
import axios from '@/libs/axios';


export default function ListeActus( {actualites, setActualites} ) {
    const [page, setPage] = useState(1); // État pour suivre la page actuelle

    const articlesPerPage = 8; // Nombre d'articles par page

    // Fonction pour filtrer les articles à afficher sur la page actuelle
    const getPaginatedArticles = () => {
        const startIndex = (page - 1) * articlesPerPage;
        const endIndex = startIndex + articlesPerPage;
        return actualites.slice(startIndex, endIndex);
    };

    // Calcul du nombre total de pages
    const totalPages = Math.ceil(actualites.length / articlesPerPage);

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

    const truncateContent = (content, maxContentLength) => { //fonction pour tronquer la taille du texte ou du titre pour ne pas avoir un tableau avec trop de texte
        if (content.length > maxContentLength) {
            return content.substring(0, maxContentLength) + '...';
        }
        return content;
    };

    const handleEdit = (actualite) => {
        // console.log(actualite);  
    }

    const handleDelete = (actualite) => {
        const isConfirmed = window.confirm(`Voulez-vous vraiment supprimer cet article ?`);
        if (isConfirmed) {
            const fetchDeleteActualite = async() => {
                try{
                    await axios.delete(`/api/actualite/${actualite.id}`, actualite)
                    setActualites(prevActualites => prevActualites.filter(item => item.id !== actualite.id)); // filtre de l'item qui vient d'etre supprimé afin de reactualiser la liste en dropant la ligne supprimée...
                } catch (err) {
                    console.error(err);
                }
            }    
            fetchDeleteActualite(); 
        }
    }

  return (
    <>
        <div className="test">
        <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Titre</th>
                <th>Auteur</th>
                <th>Photo</th>
                <th>Contenu</th>
                {/* <th>Edit</th> */}
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
                {getPaginatedArticles().map((actualite) => (
                    actualite && (
                    <tr key={actualite.id}>
                        <td className='w-8 text-center'>{actualite.id}</td>
                        <td>{truncateContent(actualite.titre, 50)}</td>
                        <td>{actualite.auteur}</td>
                        <td>
                            <img src={actualite.photo} alt='Photo actu' />
                        </td>
                        <td>{truncateContent(actualite.content, 150)}</td>
                        {/* <td>
                            <button className='button-edit' onClick={() => handleEdit(actualite)}>
                                <img src="/assets/icones/edit-button.png" alt="button edit" />
                            </button>
                        </td> */}
                        <td>
                            <button className='button-delete' onClick={() => handleDelete(actualite)}>
                                <img src="/assets/icones/delete-button.png" alt="button delete" />
                            </button>
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
