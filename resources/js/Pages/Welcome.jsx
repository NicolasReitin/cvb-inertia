import '../../sass/welcome.scss'  

import Header from '@/Layouts/Header'
import Footer from '@/Layouts/Footer'
import React from 'react'
import MainPhoto from '@/Components/header/MainPhoto'
import Actualites from '@/Components/Actualites'
import Reseaux from '@/Components/Reseaux'
import Partenaires from '@/Components/Partenaires'

export default function Welcome() {
  // console.log(auth);
  
  return (
    <>
        {/* <Head title="Accueil" /> */}

        <Header />

        <MainPhoto 
          src='/assets/images/cover.webp'
          alt={"Caen Volley Ball Photo"}
          className={'main-photo-cover'}
          loading='lazy'
        />

        <div className="scores">
          <h2>SAVE <span>THE DATE </span>!</h2>
          <div className='mt-8 md:mt-12 lg:mt-16'>
            <iframe 
              id="65f4382f11d4460dd0e0c6a0" 
              title="Score'N'Co"
              height="320" src="https://v1.scorenco.com/widget/65f4382f11d4460dd0e0c6a0/" 
              style={{display: 'block', width: '100%', overflow: 'auto', margin: 'auto', borderWidth: '0px', borderRadius: '5px', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)'}}
            ></iframe>
          </div>
        </div>

        <Actualites />

        <Reseaux />

        <Partenaires />

        <Footer />

    </>
  )
}
