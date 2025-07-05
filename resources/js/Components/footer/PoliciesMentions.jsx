import React from 'react'

export default function PoliciesMentions() {
  return (
    <>
        <hr className='lg:hidden mt-8 mb-8'/>
        <div className='lg:mt-16 lg:flex lg:justify-center lg:gap-48'>
            <ul className='mentions flex justify-center text-white mb-4 lg:mb-0 gap-16 lg:gap-8'>
                <li><a href="">Mentions légales</a></li>
                <li><a href="">Politique de cookies</a></li>
            </ul>
            <div className='reseaux-sociaux flex justify-center gap-8 mb-4 lg:mb-0'>
                <a target='_blank' rel="stylesheet" href="https://instagram.com/caenvolleyball/">
                    <img className='' src="/assets/icones/instagram.png" alt="instagram" />
                </a>
                <a target='_blank' rel="stylesheet" href="https://facebook.com/cvbofficiel/">
                    <img className='' src="/assets/icones/facebook.png" alt="facebook" />
                </a>        
            </div>
            <div className="sign flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-8">
                <p className='text-white'>2024 © Tous droits réservés. Caen Volley Ball</p>
                <p className='text-white'><a href="https://nicolas-reitin.fr" target='_blank'>Site by NR</a></p>
            </div>
        </div>
    </>
  )
}
