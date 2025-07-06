import Footer from '@/Layouts/Footer'
import Header from '@/Layouts/Header'
import React from 'react'

import '../../../sass/divers.scss'  


export default function Reglement({auth}) {
  return (
    <>
        {/* <Head title='Reglement' /> */}

        <Header auth={auth}/>

        <section>
            <h1>Règlement intérieur du Caen Volley Ball</h1>
            <div className='reglement'>
                <embed src="\assets\documents\reglement.pdf" type="application/pdf" width="100%" height="1000px" />
            </div>
        </section>


        <Footer />
    </>
  )
}
