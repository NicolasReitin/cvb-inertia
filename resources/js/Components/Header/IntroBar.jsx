import React from 'react'
import trans from '@/lang/fr/main'

export default function IntroBar() {
  return (
    <div className="introBar flex justify-between">
        <p className='text-white mt-2'><i>{trans.slogan}</i></p>
        <div className='flex gap-4 mb-1 mt-1'>
            <a target='_blank' rel="stylesheet" href="https://instagram.com/caenvolleyball/">
                <img src="/assets/icones/instagram.png" alt="instagram Caen Volley Ball" />
            </a>
            <a target='_blank' rel="stylesheet" href="https://facebook.com/cvbofficiel/">
                <img src="/assets/icones/facebook.png" alt="facebook Caen Volley Ball" />
            </a>        
        </div>
    </div>
  )
}
