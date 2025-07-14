import React, { useEffect, useState } from 'react'
import '@sass/caroussel.scss' 
import axios from '@/libs/axios';



export default function Caroussel({ partners }) {

    const translationMultiplier = partners.length; // Valeur dynamique que vous souhaitez utiliser

    return (
        <>
            <div className="slider">
                <div className="slide-track" style={{ '--translation-multiplier': translationMultiplier }}>
                    {
                        partners.map((partner)=> (
                            <div key={partner.id} className="slide">
                                <img src={partner.logo} height="100" width="250" alt={partner.nom}/>
                            </div>
                        ))
                    } 
                    {/* double des div pour enchainement du carousel */}
                    {
                        partners.map((partner)=> (
                            <div key={partner.id} className="slide">
                                <img src={partner.logo} height="100" width="250" alt={partner.nom}/>
                            </div>
                        ))
                    }     
                </div>
            </div>
        </>
    )
}




