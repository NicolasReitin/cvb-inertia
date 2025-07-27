import React from 'react'
import MainLayout from '@/Layouts/MainLayout'

export default function History() {
  return (
    <MainLayout title='Historique'>
      <section>
          <h1>Historique du Caen Volley Ball</h1>
          <div className='historique'>
              <img src="/assets/documents/historique.png" alt="historique" />
          </div>
      </section>
    </MainLayout>
  )
}
