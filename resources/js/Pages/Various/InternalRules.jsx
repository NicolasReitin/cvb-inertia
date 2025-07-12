import React from 'react'
import '../../../sass/divers.scss'  
import MainLayout from '@/Layouts/MainLayout'

export default function InternalRules() {
  return (
    <MainLayout title='Règlement intérieur'>
      <section>
          <h1>Règlement intérieur du Caen Volley Ball</h1>
          <div className='reglement'>
              <embed src="\assets\documents\reglement.pdf" type="application/pdf" width="100%" height="1000px" />
          </div>
      </section>
    </MainLayout>
  )
}
