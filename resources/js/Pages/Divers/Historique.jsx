import Footer from '@/Layouts/Footer'
import Header from '@/Layouts/Header'
import React from 'react'

import '../../../sass/divers.scss'  


export default function Historique({auth}) {
  return (
    <>
        {/* <Head title='Historique' /> */}

        <Header auth={auth}/>

        <section>
            <h1>Historique du Caen Volley Ball</h1>
            <div className='historique'>
                <img src="/assets/images/divers/historique.png" alt="historique" />
            </div>
        </section>


        <Footer />
    </>
  )
}
