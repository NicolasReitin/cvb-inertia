import React, { useEffect, useState } from 'react'
import Footer from '@/Layouts/Footer'
import Header from '@/Layouts/Header'
import { Link } from '@inertiajs/react';
import moment from 'moment';

import '../../../sass/actualites.scss'  
import ButtonGold from '@/Components/ButtonGold';
import MainPhoto from '@/Components/Header/MainPhoto';
import ApiReseaux from '@/Components/ApiReseaux';

import axios from '@/libs/axios';


export default function Actualites() {
    const [actualites, setActualites] = useState([]);

    useEffect(() =>{
        // Fonction asynchrone pour récupérer les articles
        const fetchActualites = async() => {
          try {
            const response = await axios.get('/api/actualites')
            setActualites(response.data.actualites)           
          } catch (err) {
            console.error(err);
          }
        }
        fetchActualites();
    }, []);

    useEffect(() => {
        adjustImageFit();
    }, [actualites]); // Réajuster chaque fois que les actualités changent

    const adjustImageFit = () => {
        const images = document.querySelectorAll('.card img');
        images.forEach(img => {
            const handleLoad = () => {
                const ratio = img.naturalHeight / img.naturalWidth;
                const threshold = 0.9; // Seuil pour décider proche portrait
                img.style.objectFit = ratio < threshold ? 'cover' : 'contain';
            };
            if (img.complete) {
                handleLoad();
            } else {
                img.onload = handleLoad;
            }
        });
    };


  return (
    <>
        {/* <Head title="Actualités" /> */}

        <Header />

        <div className='bloc-main-photo'>
            <MainPhoto 
            src='/assets/images/cover2baw.webp'
            alt={"Caen Volley Ball Photo"}
            className={'main-photo'}
            />
        </div>    

                
        <section className='flex'>
            <div className="left-bloc">
                <h1>ACTUALITÉS</h1>
                <div className='cards'>
                    {
                        actualites.map((actu)=> (
                            <div className='card' key={actu.id}>
                                {/* <Link href={route('actu.show', {actu: actu.id})}> */}
                                <Link href={`/actualite/${actu.id}`}>
                                    <div className='relative'>
                                        <img src={actu.photo} alt="actualité" />
                                        <div className="filtre-img"></div>
                                    </div>
                                    <h2>{ actu.titre }</h2>
                                    <h3>Le { moment(actu.created_at).locale('fr').format('DD/MM/YYYY') }</h3>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                {/* Afficher la pagination avec <Link> */}
                <div className='flex justify-center gap-8'>
                    {actualites.prev_page_url && (
                        <>
                            <ButtonGold
                                href = {actualites.prev_page_url}
                                classNameButton = 'button-next-previous' 
                                content = {
                                    <>
                                        <img src="assets/icones/left.png" alt="next" />
                                    </>
                                }
                            />
                            {/* <Link href={actualites.prev_page_url}>Précédent</Link> */}
                        </>
                    )}
                    {actualites.next_page_url && (
                        <>
                            <ButtonGold
                                href = {actualites.next_page_url}
                                classNameButton = 'button-next-previous' 
                                content = {
                                    <>
                                        <img src="assets/icones/right.png" alt="next" />
                                    </>
                                }
                            />
                        </>
                    )}
                </div>
            </div>
            <div className="right-bloc">
                <ApiReseaux />
            </div>
        </section>  

        <Footer />

    </>
  )
}


