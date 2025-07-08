import Footer from '@/Layouts/Footer'
import Header from '@/Layouts/Header'
import React from 'react'

import '../../../sass/divers.scss'  


export default function ModeEmploiLicence() {
    return (
    <>
        {/* <Head title="Mode d'emploi Licence" /> */}

        <Header />

        <section>
            <h1>Comment remplir sa licence</h1>
            <div className='mode-emploi-icence'>
                <embed src="\assets\documents\mode_d_emploi_licence_23_24.pdf" type="application/pdf" width="100%" height="1000px" />
            </div>
        </section>


        <Footer />
    </>
  )
}
