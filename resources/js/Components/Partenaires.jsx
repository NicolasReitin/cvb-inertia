import React, { useEffect, useState } from 'react'
import Caroussel from './Caroussel'

import axios from '@/libs/axios';

export default function Partenaires() {

    const [partners, setPartners] = useState([]);

    useEffect(() =>{
        // Fonction asynchrone pour récupérer les articles
        const fetchPartenaires = async() => {
          try {
            const response = await axios.get('/api/partenaires')
            setPartners(response.data.partners)      
          } catch (err) {
            console.error(err);
          }
        }
        fetchPartenaires();
    }, []);

  return (
    <>
      <div className="partenaires">
        <h2 className=''>LES PARTENAIRES</h2>
        <div className="flex justify-center mt-10">
          <Caroussel partners={partners}/>
        </div>
      </div>
    </>
  )
}
