import React from 'react'
import '@sass/divers.scss'  
import MainLayout from '@/Layouts/MainLayout'

export default function History() {
  return (
    <MainLayout title='Historique'>
      <section>
          <h1>Historique du Caen Volley Ball</h1>
          <div className='historique'>
              <img src="/assets/images/divers/historique.png" alt="historique" />
          </div>
      </section>
    </MainLayout>
  )
}
