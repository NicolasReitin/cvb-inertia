import React from 'react'
import MainLayout from '@/Layouts/MainLayout'

export default function BecomePartner() {
  return (
    <MainLayout title='Devenez partenaire'>
      <section>
          <h1>Devenez partenaire du Caen Volley Ball</h1>
          <div className='devenez-partenaire'>
              <embed src="\storage\documents\devenez_partenaire.pdf" type="application/pdf" width="100%" height="1000px" />
          </div>
      </section>
    </MainLayout>
  )
}
