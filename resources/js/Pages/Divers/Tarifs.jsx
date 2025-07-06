import Footer from '@/Layouts/Footer'
import Header from '@/Layouts/Header'
import React from 'react'

import '../../../sass/divers.scss'  


export default function Tarifs({auth}) {
  return (
    <>
        {/* <Head title='Tarifs' /> */}

        <Header auth={auth}/>

        <section>
            <h1>Tarifs</h1>
            <div className='tarifs'>
                <embed src="\assets\documents\tarifs.pdf" type="application/pdf" width="100%" height="1450px" />
            </div>
        </section>

        <Footer />
    </>
  )
}
