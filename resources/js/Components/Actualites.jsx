import { Link } from '@inertiajs/react';
import React, { useEffect, useState } from 'react'
import ButtonGold from './ButtonGold'
import moment from 'moment';
import axios from '@/libs/axios';

export default function Actualites() {
  const [othersActu, setOthersActu] = useState([]);
  const [firstActu, setFirstActu] = useState([]);

  useEffect(() =>{
    // Fonction asynchrone pour récupérer les articles
    const fetchActualites = async() => {
      try {
        const response = await axios.get('/api/actualites')
        setOthersActu(response.data.othersActu)
        setFirstActu(response.data.firstActu)     
      } catch (err) {
        console.error(err);
      }
    }
    fetchActualites();
  }, []);

  useEffect(() => {
    adjustImageFit();
  }, [firstActu, othersActu]); // Réajuster chaque fois que les actualités changent

  // fonction pour gérer le cover ou contain de l'img selon paysage ou portrait de l'image
  const adjustImageFit = () => { 
    const img = document.querySelector('.first-actu img'); 
    if (img) {
      img.onload = () => {
        // Calculer le ratio de l'image
        const ratio = img.naturalHeight / img.naturalWidth;
        const threshold = 0.9; // Seuil pour décider proche portrait
        img.style.objectFit = ratio < threshold ? 'cover' : 'contain';
      };
      // Si l'image est déjà chargée
      if (img.complete) {
        img.onload();
      }
    }
  };
  
  return (
    <>
        <div className="actualites">
          <h2>LES ACTUALITÉS</h2>
          <div className="flex flex-col items-center lg:flex-row lg:justify-center mt-10">
          {/* mt-8 md:mt-12 lg:mt-16 */}
          {firstActu && (
            <div className="first-actu">
              <Link to={`/actualite/${firstActu.id}`}>
                <div className='relative'>
                    <img src={firstActu.photo} alt="main actus" />
                    <div className="filtre-img"></div>
                </div>
                <p className='ml-5 mt-1'>Le { moment(firstActu.created_at).locale('fr').format('DD/MM/YYYY') }</p>
                <h3 className='ml-5 mt-1'><strong> {firstActu.titre} </strong></h3>
              </Link>
            </div>
          )}
            <div className="others-actu flex flex-col gap-2 mt-5 lg:mt-8 lg:ml-5">
              {othersActu && (
                othersActu.map((actu) =>(
                  <div 
                  key={actu.id}
                  className='block-others-actus'>
                    <Link to={`/actualite/${actu.id}`}>
                        <p className='lg:ml-3'>Le { moment(actu.created_at).locale('fr').format('DD/MM/YYYY') }</p>
                        <h3 className='lg:ml-3 lg:mt-2'><strong> { actu.titre }</strong></h3>
                    </Link>                  
                  </div>
                ))
              )
              }
              <ButtonGold
                href = '/actualites'
                classNameButton = 'all-actus' 
                content = 'TOUTES LES ACTUS'
              />
            </div>
          </div>
        </div>
    </>
  )
}
