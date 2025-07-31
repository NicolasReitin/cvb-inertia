import { Link } from '@inertiajs/react';
import React, { useEffect } from 'react'
import ButtonGold from './ButtonGold'
import moment from 'moment';
import trans from '@/lang/fr/main'

export default function Posts({ firstPost, othersPosts }) {
  useEffect(() => {
    adjustImageFit();
  }, [firstPost, othersPosts]); // Réajuster chaque fois que les actualités changent

  // fonction pour gérer le cover ou contain de l'img selon paysage ou portrait de l'image
  const adjustImageFit = () => { 
    const img = document.querySelector('.first-post img'); 
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
      <div className="posts">
        <h2>{trans.posts.title}</h2>
        <div className="flex flex-col items-center lg:flex-row lg:justify-center mt-10">
        {/* mt-8 md:mt-12 lg:mt-16 */}
        {firstPost && (
          <div className="first-post">
            <Link href={`/actualites/${firstPost.id}`}>
              <div className='relative'>
                  <img src={firstPost.image[0] ? firstPost.image: '/assets/images/no-photo.png' } alt="main actus" />
                  <div className="filtre-img"></div>
              </div>
              <p className='ml-5 mt-1'>Le { moment(firstPost.created_at).locale('fr').format('DD/MM/YYYY') }</p>
              <h3 className='ml-5 mt-1'><strong> {firstPost.title} </strong></h3>
            </Link>
          </div>
        )}
          <div className="others-posts flex flex-col gap-2 mt-5 lg:mt-8 lg:ml-5">
            {othersPosts && (
              othersPosts.map((post) =>(
                <div 
                key={post.id}
                className='block-others-posts'>
                  <Link href={`/actualites/${post.id}`}>
                      <p className='lg:ml-3'>Le { moment(post.created_at).locale('fr').format('DD/MM/YYYY') }</p>
                      <h3 className='lg:ml-3 lg:mt-2'><strong> { post.title }</strong></h3>
                  </Link>                  
                </div>
              ))
            )
            }
            <ButtonGold
              href = '/actualites'
              classNameButton = 'all-posts' 
              content = 'TOUTES LES ACTUS'
            />
          </div>
        </div>
      </div>
    </>
  )
}
