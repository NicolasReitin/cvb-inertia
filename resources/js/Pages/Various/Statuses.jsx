import React from 'react'
import '@sass/divers.scss'  
import MainLayout from '@/Layouts/MainLayout'

export default function Statuses() {
  return (
    <MainLayout title='Les statuts'>
      <section>
          <h1>Les statuts du Caen Volley Ball</h1>
          <div className='statuts'>
              <embed src="\assets\documents\statuts.pdf" type="application/pdf" width="100%" height="1000px" />
          </div>
      </section>
    </MainLayout>
  )
}
