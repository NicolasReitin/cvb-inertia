import React from 'react'
import MainLayout from '@/Layouts/MainLayout'

export default function Prices() {
  return (
    <MainLayout title='Tarifs'>
      <section>
          <h1>Tarifs</h1>
          <div className='tarifs'>
              <embed src="\assets\documents\tarifs.pdf" type="application/pdf" width="100%" height="1450px" />
          </div>
      </section>
    </MainLayout>
  )
}
