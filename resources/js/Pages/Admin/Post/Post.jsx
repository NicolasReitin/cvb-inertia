import React from 'react'
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import PostList from '@/Components/Dashboard/Post/PostList';
import CreatePost from '@/Components/Dashboard/Post/CreatePost';
import { ToastContainer, toast } from 'react-toastify';

export default function Post() {

  // notification toast selon message
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
      <Head title = "Admin - Actualités" />

      <DashboardLayout>
        <h1>Actualités</h1>

        <ToastContainer 
            position="bottom-right"
            autoClose={2900}                                   
            theme="light"
        />
        <div className="">
          <CreatePost 
            notify={notify}
          />
        </div>
        <div className="liste-actus">
          <PostList 
            notify={notify}
          />
        </div>

      </DashboardLayout>
    </>
  );
  
}
