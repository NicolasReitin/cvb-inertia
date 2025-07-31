import React from 'react'
import { Head, usePage } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/DashboardLayout';
import { ToastContainer, toast } from 'react-toastify';
import PartnerList from '@/Components/Dashboard/Partner/PartnerList';
import CreatePartner from '@/Components/Dashboard/Partner/CreatePartner';

export default function Partner() {

  // notification toast selon message
  const notify = (type) => {
      switch (type) {
          case 'success':
              toast.success("Le partenaire a bien été créé");
              break;
          case 'deleted':
              toast.success("Partenaire supprimé avec succès");
              break;
          case 'updated':
              toast.success("Partenaire modifié avec succès");
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
      <Head title = "Admin - Partenaires" />

      <DashboardLayout>
        <h1>Les partenaires</h1>

        <ToastContainer 
            position="bottom-right"
            autoClose={2900}                                   
            theme="light"
        />
        {/* <div className="">
          <CreatePartner 
            notify={notify}
          />
        </div> */}
        <div className="list-partners">
          <PartnerList
            notify={notify}
          />
        </div>

      </DashboardLayout>
    </>
  );
}