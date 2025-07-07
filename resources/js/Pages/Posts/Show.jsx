import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Footer from '@/Layouts/Footer'
import Header from '@/Layouts/Header'
import moment from 'moment'
import '../../../sass/actualites.scss'  
import axios from '@/libs/axios';

export default function show({ auth }) {
    const { actu } = useParams();
    const [actualite, setActualite] = useState([]);

    useEffect(() =>{
        // Fonction asynchrone pour récupérer les articles
    const fetchActualites = async() => {
        try {
            const response = await axios.get(`/api/actualite/${actu}`)
            setActualite(response.data.data);
        } catch (err) {
            console.error(err);
        }
    }
    fetchActualites();
      }, []);

    useEffect(() => {
        adjustImageFit();
    }, [actualite]);

    const adjustImageFit = () => {
        const img = document.querySelector('.card-actu img');
        if (img) {
            const handleLoad = () => {
                const ratio = img.naturalHeight / img.naturalWidth;
                const threshold = 0.9;
                img.style.objectFit = ratio < threshold ? 'cover' : 'contain';
            };
            if (img.complete) {
                handleLoad();
            } else {
                img.onload = handleLoad;
            }
        }
    };

  return (
    <>
        {/* <Head title="Actualités" /> */}

        <Header auth={auth}/>

        <section>
            <article>
                <h1>{ actualite.titre }</h1>
                <div className='card-actu'>
                    <div className='relative'>
                        <h3>Par { actualite.auteur } | Le { moment(actualite.created_at).format('DD/MM/YYYY') }</h3> 
                        <img src={actualite.photo} alt="actu" />
                        <div className="filtre-img"></div>
                    </div>
                    <p className='article-content'>{ actualite.content }</p>
                </div>
            </article>
        </section>

        <Footer />

    </>
  )
}
