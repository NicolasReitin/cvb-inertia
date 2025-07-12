import React from 'react'
import '../../../sass/divers.scss'  
import MainLayout from '@/Layouts/MainLayout'

export default function Instructions() {
    return (
        <MainLayout title="Mode d'\emploi licence">
            <section>
                <h1>Comment remplir sa licence</h1>
                <div className='mode-emploi-icence'>
                    <embed src="\assets\documents\mode_d_emploi_licence_23_24.pdf" type="application/pdf" width="100%" height="1000px" />
                </div>
            </section>
        </MainLayout>
  )
}
