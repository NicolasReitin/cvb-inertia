import Footer from '@/Layouts/Footer'
import Header from '@/Layouts/Header'
import React from 'react'

import '../../../sass/divers.scss'  


export default function Statuts({auth}) {
  return (
    <>
        {/* <Head title='Les statuts' /> */}

        <Header auth={auth}/>

        <section>
            <h1>Les statuts du Caen Volley Ball</h1>
            <div className='statuts'>
                <embed src="\assets\documents\statuts.pdf" type="application/pdf" width="100%" height="1000px" />
            </div>
        </section>


        <Footer />
    </>
  )
}
