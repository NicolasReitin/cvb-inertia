import Footer from '@/Layouts/Footer'
import Header from '@/Layouts/Header'
import React from 'react'

import '../../../sass/divers.scss'  


export default function DevenezPartenaire() {
  return (
    <>
        {/* <Head title='Devenez partenaire' /> */}

        <Header />
        <section>
            <h1>Devenez partenaire du Caen Volley Ball</h1>
            <div className='devenez-partenaire'>
                <embed src="\assets\images\divers\devenez_partenaire.pdf" type="application/pdf" width="100%" height="1000px" />
            </div>
        </section>


        <Footer />
    </>
  )
}
