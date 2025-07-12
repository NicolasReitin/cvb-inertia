import React from 'react'
import '../../../sass/divers.scss'  
import MainLayout from '@/Layouts/MainLayout'

export default function Details() {
    return (
        <MainLayout title="Modalités d\'inscription">
            <section>
                <h1>Les modalités d'inscription</h1>
                <div className='projet'>
                    <div className='intro'>
                        <h3>
                            Pour vous inscrire au Caen Volley Ball, il vous faut effectuer les démarches suivantes :
                        </h3>
                        <p>
                            Toutes ces démarches pourront se faire à l'issue de votre première séance. Toutefois, vous pouvez d'ores et déjà prendre connaissance du processus d'inscription et télécharger des documents     
                        </p>
                    </div>
                    <div className="projet-content modalites">
                        <p>
                            <strong>1 -</strong> Accéder à la demande de licence  FFVB via le formulaire à Imprimer et remplir en cliquant sur le lien ci-dessous (ne remplir que ce que vous savez):
                        </p>
                        <h3><a href="/assets/documents/Formulaire_demande_licences.pdf" target='_blank'>Bordereau de licence FFVB</a></h3>
                        <p>
                        <strong>2 -</strong> Procurez-vous le certificat médical ad-hoc auprès de votre médecin, en faisant remplir par votre médecin le cadre réservé à cet effet, sur le formulaire de demande de licence. (pour les jeunes, faire remplir la mention simple surclassement).
                        </p>
                        <p>
                        <strong>3 -</strong> Fournir une photo d'identité (20X25) avec votre nom inscrit au dos.
                        </p>
                        <p>
                        <strong>4 -</strong> Joignez une copie d'une pièce d'identité (obligatoire)
                        </p>
                        <p>
                        <strong>5 -</strong> Pour les mineurs, faire remplir le <a href="/assets/documents/Attestation_parentale.jpg" target='_blank' >document d'autorisation parentale</a> (cliquer sur le lien).
                        </p>
                        <p>
                        <strong>6 -</strong> Pour les dirigeants, les entraineurs et les arbitres, l'attestation d'honorabilité <a href="/assets/documents/FFvolley_Attestation_Honorabilite.pdf" target='_blank'>Majeur</a>, <a href="/assets/documents/FFvolley_Attestation_Honorabilite_Mineur.pdf" target='_blank'>Mineur</a> (cliquer sur le lien)
                        </p>
                        <p>
                        <strong>7 -</strong> Etablir votre règlement, à l'ordre du Caen Volley Ball, du montant correspondant à votre catégorie de pratique. Voir <a href='/tarifs' target='_blank'>tarif</a> (cliquer sur le lien).
                        </p>
                        <p>
                            Vous pouvez régler en un ou plusieurs chèques avec la date d'encaissement au dos et/ou les chèques/bons (UNCV vacances, coupons sport, Atouts Normandie, etc...). Préciser au dos le nom du licencié
                        </p>
                        <h4>Merci de retourner votre dossier complet auprès de votre entraîneur/animateur.</h4>
                        <h4>Tout dossier incomplet, y compris le paiement, ne nous permettra pas de vous licencier.</h4>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}
