import React from 'react'
import { Head } from '@inertiajs/react'
import DashboardLayout from '@/Layouts/DashboardLayout';

export default function Club() {
  return (
    <>
      <Head title = "Admin - Club" />

      <DashboardLayout>

        Afficher listes des documents + un bouton pour chacun pour modifier le fichier pdf comme dans 

        <div className='flex flex-wrap gap-12'>
            <div>
              <div className="card">
                <iframe 
                  src="\storage\documents\formulaire_demande_licences.pdf" 
                  type="application/pdf" 
                  width="400px" 
                  height="560px" 
                />  
              </div>
              <button>Modifier fichier</button>
            </div>
            <div>
                <div className="card" style={{border: "solid 1px black", height: '200px', width: '200px'}}>
                  <p>Règlement intérieur</p>
                </div>
                <button>Modifier fichier</button>
            </div>
            <div>
                <div className="card" style={{border: "solid 1px black", height: '200px', width: '200px'}}>
                  <p>Les statuts de l'association</p>
                </div>
                <button>Modifier fichier</button>
            </div>
            <div>
                <div className="card" style={{border: "solid 1px black", height: '200px', width: '200px'}}>
                  <p>Planning / entrainement</p>
                </div>
                <button>Modifier fichier</button>
            </div>
            <div>
                <div className="card" style={{border: "solid 1px black", height: '200px', width: '200px'}}>
                  <p>Devenez Partenaire</p>
                </div>
                <button>Modifier fichier</button>
            </div>
            <div>
                <div className="card" style={{border: "solid 1px black", height: '200px', width: '200px'}}>
                  <p>Tarifs</p>
                </div>
                <button>Modifier fichier</button>
            </div>
            <div>
                <div className="card" style={{border: "solid 1px black", height: '200px', width: '200px'}}>
                  <p>Mode d’emploi Formulaire de demande</p>
                </div>
                <button>Modifier fichier</button>
            </div>
            <div>
                <div className="card" style={{border: "solid 1px black", height: '200px', width: '200px'}}>
                  <p>FORMULAIRE DE DEMANDE DE LICENCE</p>
                </div>
                <button>Modifier fichier</button>
            </div>
            <div>
                <div className="card" style={{border: "solid 1px black", height: '200px', width: '200px'}}>
                  <p>ATTESTATION D’HONORABILITE</p>
                </div>
                <button>Modifier fichier</button>
            </div>
            <div>
                <div className="card" style={{border: "solid 1px black", height: '200px', width: '200px'}}>
                  <p>ATTESTATION D’HONORABILITE (Mineur)</p>
                </div>
                <button>Modifier fichier</button>
            </div>
        </div>

      </DashboardLayout>
    </>
  )
}
