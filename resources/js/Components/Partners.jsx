import React, { useEffect } from 'react'
import Caroussel from './Caroussel'

export default function Partners({ partners }) {
  
  return (
    <>
      <div className="partners">
        <h2 className=''>LES PARTENAIRES</h2>
        <div className="flex justify-center mt-10">
          <Caroussel partners={partners}/>
        </div>
      </div>
    </>
  )
}
