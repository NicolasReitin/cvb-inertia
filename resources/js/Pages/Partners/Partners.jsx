import React from 'react'
import '../../../sass/divers.scss'  
import MainLayout from '@/Layouts/MainLayout'
import { usePage } from '@inertiajs/react';

export default function Partenaires() {
    const { partnersInstitutionnels, partnersHelp, partnersPrivate } = usePage().props;

    return (
        <MainLayout title='Partenaires'>
            <section>
                <h1>Nos partenaires </h1>
                <h2 className='partners-title'>PARTENAIRES INSTITUTIONNELS</h2>
                    <div className="partners">
                        {
                            partnersInstitutionnels.map((partner)=> (
                                <a key={partner.id} href={partner.url ? partner.url : null}>
                                    <img src={partner.logo} height="100" width="250" alt={partner.name} />
                                </a>
                                
                            ))
                        }
                    </div>

                <h2 className='partners-title'>PARTENAIRES PRIVÉS</h2>
                    <div className="partners">
                        {
                            partnersPrivate.map((partner)=> (
                                <a key={partner.id} href={partner.url ? partner.url : null}>
                                    <img src={partner.logo} height="100" width="250" alt={partner.name} />
                                </a>
                                
                            ))
                        }
                    </div>

                <h2 className='partners-title'>NOUS ONT AIDÉS</h2>
                    <div className="partners">
                        {
                            partnersHelp.map((partner)=> (
                                <a key={partner.id} href={partner.url ? partner.url : null}>
                                    <img src={partner.logo} height="100" width="250" alt={partner.name} />
                                </a>
                                
                            ))
                        }
                    </div>
            </section>
        </MainLayout>
  )
}
