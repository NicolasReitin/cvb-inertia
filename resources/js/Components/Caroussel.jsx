import React, { useEffect, useState } from 'react'
import '../../sass/caroussel.scss' 
import axios from '@/libs/axios';



export default function Caroussel() {

    const [partners, setPartners] = useState([]);

    const translationMultiplier = partners.length; // Valeur dynamique que vous souhaitez utiliser

    useEffect(() =>{
        // Fonction asynchrone pour récupérer les articles
        const fetchPartners = async() => {
          try {
            const response = await axios.get('/api/partenaires')
            console.log(response.data);
            setPartners(response.data.partners)                  
          } catch (err) {
            console.error(err);
          }
        }
    
        fetchPartners();
      }, []);

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




