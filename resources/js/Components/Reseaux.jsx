import { Link } from '@inertiajs/react';
import React from 'react'
import ButtonGold from './ButtonGold'

export default function Reseaux() {
  return (
    <>
        <div className="reseaux">
            <h2 className=''>SUIVEZ-NOUS SUR LES RESEAUX SOCIAUX</h2>
            <div className='flex justify-center gap-16 lg:gap-36 mb-12 lg:mb-24'>
              <a href="https://facebook.com/cvbofficiel" target='_blank'>
                <img src="assets/icones/big-facebook.png" alt="facebook club" />
              </a>
              <a href="https://instagram.com/caenvolleyball/" target='_blank'>
                <img src="assets/icones/big-instagram.png" alt="Instagram Club" />
              </a>
            </div>
            <div className='flex justify-center'>
                <ButtonGold
                    href = '/actualites'
                    classNameButton = 'button-post' 
                    content = 'Voir nos dernières actualités'
                />
            </div>
        </div>
    </>
  )
}
