import React from 'react'
import { Head } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/DashboardLayout';
import Users from '@/Components/Dashboard/Users/Users';
import { toast, ToastContainer } from 'react-toastify';

export default function User() {
  const notify = (type) => {
      switch (type) {
          case 'success':
              toast.success("L'article a bien été créé");
              break;
          case 'deleted':
              toast.success("Article supprimé avec succès");
              break;
          case 'updated':
              toast.success("Article modifié avec succès");
              break;
          case 'form-error':
              toast.error("Le formulaire contient des erreurs");
              break;
          case 'update-error':
              toast.error("Erreur lors de la modification");
              break;
          case 'delete-error':
              toast.error("Erreur lors de la suppression");
              break;
          default:
              break;
      }
  };

  return (
    <>
        <Head title = "Admin - Club" />

        <DashboardLayout>
          <h1>Les utilisateurs</h1>

            <ToastContainer 
                position="bottom-right"
                autoClose={2900}                                   
                theme="light"
            />

            <Users 
              notify={notify}
            />

        </DashboardLayout>
    </>
  )
}