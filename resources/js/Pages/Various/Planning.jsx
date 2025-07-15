import React from 'react'
import MainLayout from '@/Layouts/MainLayout'

export default function Planning() {
  return (
    <MainLayout title='Planning'>
      <section>
          <h1>Planning des entrainements</h1>
          <div className='planning'>
              <img src="/assets/images/divers/planning.jpg" alt="planning cvb" />
          </div>
      </section>
    </MainLayout>
  )
}
