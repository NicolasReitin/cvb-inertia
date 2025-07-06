import Footer from '@/Layouts/Footer'
import Header from '@/Layouts/Header'
import React from 'react'

import '../../../sass/divers.scss'  


export default function Planning({auth}) {
  return (
    <>
        {/* <Head title='Planning' /> */}

        <Header auth={auth}/>

        <section>
            <h1>Planning des entrainements</h1>
            <div className='planning'>
                <img src="/assets/images/divers/planning.jpg" alt="planning cvb" />
            </div>
        </section>


        <Footer />
    </>
  )
}
