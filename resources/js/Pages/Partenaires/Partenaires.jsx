import Footer from '@/Layouts/Footer'
import Header from '@/Layouts/Header'
import React, { useEffect, useState } from 'react'

import '../../../sass/divers.scss'  

import axios from '@/libs/axios';



export default function Partenaires( {auth} ) {

    const [partnersInstitutionnels, setPartnersInstitutionnels] = useState([]);
    const [partnersHelp, setPartnersHelp] = useState([]);
    const [partnersPrivate, setPartnersPrivate] = useState([]);

    useEffect(() =>{
        // Fonction asynchrone pour récupérer les articles
        const fetchPartenaires = async() => {
          try {
            const response = await axios.get('/api/partenaires')
            setPartnersInstitutionnels(response.data.partnersInstitutionnels)
            setPartnersHelp(response.data.partnersHelp)
            setPartnersPrivate(response.data.partnersPrivate)
                        
          } catch (err) {
            console.error(err);
          }
        }
        fetchPartenaires();
    }, []);

    return (
    <>
        {/* <Head title='Les partenaires' /> */}

        <Header auth={auth}/>

        <section>
            <h1>Nos partenaires </h1>
            <h2 className='partners-title'>PARTENAIRES INSTITUTIONNELS</h2>
                <div className="partners">
                    {
                        partnersInstitutionnels.map((partner)=> (
                            <a key={partner.id} href={partner.url ? partner.url : null}>
                                <img src={partner.logo} height="100" width="250" alt={partner.nom} />
                            </a>
                            
                        ))
                    }
                </div>

            <h2 className='partners-title'>PARTENAIRES PRIVÉS</h2>
                <div className="partners">
                    {
                        partnersPrivate.map((partner)=> (
                            <a key={partner.id} href={partner.url ? partner.url : null}>
                                <img src={partner.logo} height="100" width="250" alt={partner.nom} />
                            </a>
                            
                        ))
                    }
                </div>

            <h2 className='partners-title'>NOUS ONT AIDÉS</h2>
                <div className="partners">
                    {
                        partnersHelp.map((partner)=> (
                            <a key={partner.id} href={partner.url ? partner.url : null}>
                                <img src={partner.logo} height="100" width="250" alt={partner.nom} />
                            </a>
                            
                        ))
                    }
                </div>
            

        </section>


        <Footer />
    </>
  )
}
