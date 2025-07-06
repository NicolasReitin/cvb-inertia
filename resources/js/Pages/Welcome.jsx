import '../../sass/welcome.scss'

import React from 'react'
import MainPhoto from '@/Components/Header/MainPhoto'
import Posts from '@/Components/Posts'
import Socials from '@/Components/Socials'
import Partners from '@/Components/Partners'
import Scores from '@/Components/Scores'
import MainLayout from '@/Layouts/MainLayout'

export default function Welcome() {
  
  return (
    <>
      <MainLayout title='Accueil'>
        <MainPhoto 
          src='/assets/images/cover.webp'
          alt={"Caen Volley Ball Photo"}
          className={'main-photo-cover'}
          loading='lazy'
        />

        <Scores
          id="65f4382f11d4460dd0e0c6a0"
          title="Score'N'Co"
          height="460" 
          src="https://v1.scorenco.com/widget/65f4382f11d4460dd0e0c6a0/" 
          style={{
            display: 'block', 
            width: '100%', 
            overflow: 'auto', 
            margin: 'auto', 
            borderWidth: '0px', 
            borderRadius: '5px', 
            boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)'
          }}
        />

        <Posts />

        <Socials />

        <Partners />
      </MainLayout>
    </>
  )
}
