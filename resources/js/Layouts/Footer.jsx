import LogoClub from '@/Components/LogoClub'
import Reseaux from '@/Components/Reseaux'
import InfosPratiques from '@/Components/footer/InfosPratiques'
import PoliciesMentions from '@/Components/footer/PoliciesMentions'
import React from 'react'

export default function Footer() {
  return (
    <>
        <div>
            {/*
                via https://www.shapedivider.app/
            */}
            <div className="custom-shape-divider-bottom-1709894291">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="footer">
                <div className='flex flex-col lg:flex-row lg:justify-center gap-4 lg:gap-64'>
                    <LogoClub 
                        filePath = "/assets/images/logo-cvb-white.png"                
                    />
                    <InfosPratiques />
                </div>
                <PoliciesMentions />
            </div>
        </div>
    </>
  )
}
