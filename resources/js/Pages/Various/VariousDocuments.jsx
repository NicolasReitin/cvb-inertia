import React from 'react'
import MainLayout from '@/Layouts/MainLayout'

export default function VariousDocuments() {
    return (
        <MainLayout title='Documents divers'>
            <section>
                <h1>Documents divers </h1>
                <div className='docs-divers'>
                    <ul>
                        <li>
                            <iframe 
                                src="\assets\documents\Formulaire_demande_licences.pdf" 
                                type="application/pdf" 
                                width="400px" 
                                height="550px" 
                            />
                            <a 
                            href="/assets/documents/Formulaire_demande_licences.pdf" 
                            target='_blank'>
                                <p className='mt-8'>Télécharger formulaire de Licence</p>
                            </a> 
                        </li>
                        <li>
                            <iframe 
                                src="\assets\documents\FFvolley_Attestation_Honorabilite.pdf" 
                                type="application/pdf" 
                                width="400px" 
                                height="550px" 
                            />
                            <a 
                            href="/assets/documents/FFvolley_Attestation_Honorabilite.pdf" 
                            target='_blank'>
                                <p className="mt-8">Télécharger honorabilité Majeur</p>
                            </a>
                        </li>
                        <li>
                            <iframe 
                                src="\assets\documents\FFvolley_Attestation_Honorabilite_Mineur.pdf" 
                                type="application/pdf" 
                                width="400px" 
                                height="550px" />
                            <a 
                            href="/assets/documents/FFvolley_Attestation_Honorabilite_Mineur.pdf" 
                            target='_blank'>
                                <p className="mt-8">Télécharger honorabilité Mineur</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </MainLayout >
      )
}
