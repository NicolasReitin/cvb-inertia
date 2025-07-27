import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import useExistingExtension from '@/hooks/useExistingExtension'

export default function OrganisationChart() {
  const ext = useExistingExtension('organigramme');

  if (!ext) {
    return (
      <MainLayout title='Organigramme'>
        <section>
          <h1>Organigramme du Caen Volley Ball</h1>
          <div className='organigramme'>
            <p>Fichier non trouvé</p>
          </div>
        </section>
      </MainLayout>
    );
  }

  return (
    <MainLayout title='Organigramme'>
      <section>
          <h1>Organigramme du Caen Volley Ball</h1>
          <div className='organigramme'>
              <img src={`/assets/documents/organigramme.${ext}`} alt="organigramme" />
          </div>
      </section>
    </MainLayout>
  )
}
