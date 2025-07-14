import React from 'react'
import '@sass/divers.scss'  
import MainLayout from '@/Layouts/MainLayout'

export default function OrganisationChart() {
  return (
    <MainLayout title='Organigramme'>
      <section>
          <h1>Organigramme du Caen Volley Ball</h1>
          <div className='organigramme'>
              <img src="/assets/images/divers/organigramme.png" alt="organigramme" />
          </div>
      </section>
    </MainLayout>
  )
}
