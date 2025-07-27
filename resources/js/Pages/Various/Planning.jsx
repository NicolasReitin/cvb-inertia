import React from 'react'
import MainLayout from '@/Layouts/MainLayout'
import useExistingExtension from '@/hooks/useExistingExtension'

export default function Planning() {
  const ext = useExistingExtension('planning');

  if (!ext) {
    return (
      <MainLayout title='Planning'>
        <section>
          <h1>Planning des entraînements</h1>
          <div className='planning'>
            <p>Fichier non trouvé</p>
          </div>
        </section>
      </MainLayout>
    );
  }

  return (
    <MainLayout title='Planning'>
      <section>
        <h1>Planning des entraînements</h1>
        <div className='planning'>
          <img src={`/assets/documents/planning.${ext}`} alt="planning cvb" />
        </div>
      </section>
    </MainLayout>
  );
}
