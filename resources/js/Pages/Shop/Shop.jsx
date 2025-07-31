import React from 'react'
import MainLayout from '@/Layouts/MainLayout'

export default function Shop() {
  return (
    <MainLayout title='Boutique officielle'>
      <section>
          <h1>Boutique officielle CVB</h1>
          <div className='boutique'>
            <div className='intro'>
              <h3>Retrouvez la boutique officielle pour cette saison 2025-2026 ! </h3>
              <p>Commandez directement via le lien suivant chez Riva Floc, ou via le bon de commande chez AK Seven à renvoyer à l'adresse suivante : <a href="mailto:jp.pradeaux@hotmail.fr">jp.pradeaux@hotmail.fr</a> avant le vendredi 10 novembre 2025 !</p>
            </div>
            <div className="boutique-content">
              <div className="riva-floc">
                <h2>RIVA FLOC</h2>
                <p>
                  <a href="https://boutique-rivasport.fr/brand/caen-volley-ball/">Commander via ce lien</a>
                </p>
                <img src="/assets/Shop/rivasport.png" alt="boutique rivasport" />
              </div>
              <div className="ak-seven">
                <h2>AK SEVEN</h2>
                <p>
                  Bon de commande ci-dessous à envoyer à <a href="mailto:jp.pradeaux@hotmail.fr">jp.pradeaux@hotmail.fr</a>
                </p>
                <img src="/assets/Shop/global.png" alt="boutique ak seven" />
                <img className='bon-commande' src="/assets/Shop/bon_de_commande.png" alt="bon de commande ak seven
                " />
                <div className="bloc-tailles">
                  <div className="veste">
                    <h3>Dimensions Veste zippée</h3>
                    <img src="/assets/Shop/tailles_veste_zippee.png" alt="dimensions maillot et short" />
                  </div>
                  <div className="maillot">
                    <h3>Dimensions Maillot + Short</h3>
                    <img src="/assets/Shop/dimension_maillot_short.png" alt="dimensions veste zippée" />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </MainLayout>
  )
}