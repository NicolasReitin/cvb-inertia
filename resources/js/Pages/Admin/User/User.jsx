import React from 'react'
import { Head } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/DashboardLayout';
import Users from '@/Components/Dashboard/Users/Users';
import { toast, ToastContainer } from 'react-toastify';

export default function User() {
  const notify = (type) => {
      switch (type) {
        case 'success':
            toast.success("L'utilisateur a bien été créé");
            break;
        case 'error':
            toast.error("Erreur lors de la création de l'utilisateur");
            break;
        case 'updated':
            toast.warning("L'utilisateur a bien été modifié");
            break;
        case 'deleted':
            toast.error("L'utilisateur a bien été supprimé");
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