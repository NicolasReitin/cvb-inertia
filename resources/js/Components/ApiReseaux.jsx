import React from 'react'

export default function ApiReseaux() {
  return (
    <>
        <div className="reseaux">
            <div className='w-[350px] bloc-instagram'>
                <div>
                    <a className='flex justify-center' target='_blank' rel="stylesheet" href="https://instagram.com/caenvolleyball/">
                        <img className='h-16 w-[55%] mb-4' src="/assets/icones/logo-instagram.png" alt="logo instagram" />
                    </a>
                </div>
                <div className="elfsight-app-0ee2e7e5-23f2-4149-bb33-5b55f249b820" data-elfsight-app-lazy></div>
            </div>
            <div className='w-[350px] bloc-facebook'>
                <div>
                    <a className='flex justify-center' target='_blank' rel="stylesheet" href="https://facebook.com/cvbofficiel/">
                        <img className='h-16 mb-4' src="/assets/icones/logo-facebook.png" alt="logo facebook" />
                    </a>
                </div>
                <div className="fb-page" data-href="https://facebook.com/cvbofficiel" data-tabs="timeline" data-width="350" data-height="600" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://facebook.com/cvbofficiel" className="fb-xfbml-parse-ignore"><a href="https://facebook.com/cvbofficiel">Caen Volley Ball</a></blockquote></div>
            </div>
        </div>  
    </>
  )
}
