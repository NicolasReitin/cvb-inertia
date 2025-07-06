import Footer from '@/Layouts/Footer'
import Header from '@/Layouts/Header'
import React from 'react'

import '../../../sass/divers.scss'  


export default function Boutique( {auth}) {
  return (
    <>
      {/* <Head title='Boutique officielle' /> */}

      <Header auth={auth}/>

      <section>
          <h1>Boutique officielle CVB</h1>
          <div className='boutique'>
            <div className='intro'>
              <h3>Retrouvez la boutique officielle pour cette saison 2023-2024 ! </h3>
              <p>Commandez directement via le lien suivant chez Riva Floc, ou via le bon de commande chez AK Seven à renvoyer à l'adresse suivante : <a href="mailto:jp.pradeaux@hotmail.fr">jp.pradeaux@hotmail.fr</a> avant le vendredi 10 novembre 2023 !</p>
            </div>
            <div className="boutique-content">
              <div className="riva-floc">
                <h2>RIVA FLOC</h2>
                <p>
                  <a href="https://boutique-rivasport.fr/brand/caen-volley-ball/">Commander via ce lien</a>
                </p>
                <img src="/assets/images/boutique/rivasport.png" alt="boutique rivasport" />
              </div>
              <div className="ak-seven">
                <h2>AK SEVEN</h2>
                <p>
                  Bon de commande ci-dessous à envoyer à <a href="mailto:jp.pradeaux@hotmail.fr">jp.pradeaux@hotmail.fr</a>
                </p>
                <img src="/assets/images/boutique/global.png" alt="boutique ak seven" />
                <img className='bon-commande' src="/assets/images/boutique/bon_de_commande.png" alt="bon de commande ak seven
                " />
                <div className="bloc-tailles">
                  <div className="veste">
                    <h3>Dimensions Veste zippée</h3>
                    <img src="/assets/images/boutique/tailles_veste_zippee.png" alt="dimensions maillot et short" />
                  </div>
                  <div className="maillot">
                    <h3>Dimensions Maillot + Short</h3>
                    <img src="/assets/images/boutique/dimension_maillot_short.png" alt="dimensions veste zippée" />
                  </div>
                </div>
              </div>
            </div>

          </div>

          <p></p>

      </section>


      <Footer />
    </>
  )
}