import React, { useEffect, useState} from 'react'
import { router, usePage } from '@inertiajs/react';
import 'react-toastify/dist/ReactToastify.css';
import UpdatePartner from '@/Components/Dashboard/Partner/UpdatePartner';

export default function PartnerList({ notify }) {
    const { partners } = usePage().props;
    
    const [partnersList, setPartnersList] = useState(partners || []);
    const [updatePartner, setUpdatePartner] = useState(null);

    useEffect(() => {
        if (Array.isArray(partners)) {
            setPartnersList(partners);
        }
    }, [partners]);

    // État pour suivre la page actuelle    
    const [page, setPage] = useState(1);

    // Nombre d'articles par page
    const partnersPerPage = 8;

    // Fonction pour filtrer les articles à afficher sur la page actuelle
    const getPaginatedPartners = () => {
        const startIndex = (page - 1) * partnersPerPage;
        const endIndex = startIndex + partnersPerPage;
        return partnersList.slice(startIndex, endIndex);
    };

    // Calcul du nombre total de pages
    const totalPages = partnersList?.length ? Math.ceil(partnersList.length / partnersPerPage) : 1;

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
    const handleEdit = (partner) => {
        if (updatePartner?.id === partner.id) {
            setUpdatePartner(null); // fermer le formulaire si on reclique
        } else {
            setUpdatePartner(partner); // ouvrir pour ce partner
        }
    }

    const handleCancel = () => {
        setUpdatePartner(null); // Ferme le formulaire
    };

    // suppression d'un article
    const handleDelete = (partner) => {       
        const isConfirmed = window.confirm(`Voulez-vous vraiment supprimer ce partenaire ?`);
        if (!isConfirmed) return;

        router.delete(route('partner.destroy', partner), {
            onSuccess: () => {
                notify('deleted');
                
                // Supprimer de l'état local pour mise à jour immédiate
                setPartnersList(prev => prev.filter(item => item.id !== partner.id));
            },
        }); 
    }

  return (
    <>
        <div>
            <table className="table-auto w-full border border-gray-300 text-sm text-left">
                <thead className="bg-gray-100">
                    <tr>
                        <th>Date</th>
                        <th>Nom</th>
                        <th>Url</th>
                        <th>Logo</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {getPaginatedPartners().map((partner) => (
                        partner && (
                            <React.Fragment key={partner.id}>
                                <tr key={partner.id}>
                                    <td>{new Date(partner.created_at).toLocaleDateString('fr-FR')}</td>
                                    <td>{partner.name}</td>
                                    <td>{partner.url}</td>
                                    <td>
                                        <img className="partner-image" src={partner.logo} alt='partenaire' />
                                    </td>
                                    <td>{partner.role}</td>
                                    <td>
                                        <div className="flex items-stretch gap-2 h-full">
                                            <button className="button-edit" onClick={() => handleEdit(partner)}>
                                                <img src="/assets/icones/edit-button.png" alt="button edit" />
                                            </button>
                                            <button className="button-delete" onClick={() => handleDelete(partner)}>
                                                <img src="/assets/icones/delete-button.png" alt="button delete" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                {updatePartner?.id === partner.id && (
                                    <UpdatePartner 
                                        partner={partner}
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
