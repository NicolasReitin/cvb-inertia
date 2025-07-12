import React, { useEffect } from 'react'
import moment from 'moment'
import '../../../sass/posts.scss'
import { usePage } from '@inertiajs/react'
import MainLayout from '@/Layouts/MainLayout'

export default function show() {
    
    const { post } = usePage().props;

    useEffect(() => {
        adjustImageFit();
    }, [post]);

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
    <MainLayout title='Actualités'>
        <section>
            <article>
                <h1>{ post.title }</h1>
                <div className='card-actu'>
                    <div className='relative'>
                        <h3>Par { post.author } | Le { moment(post.created_at).format('DD/MM/YYYY') }</h3> 
                        <img src={post.photo} alt="actu" />
                        <div className="filtre-img"></div>
                    </div>
                    <p className='article-content'>{ post.content }</p>
                </div>
            </article>
        </section>
    </MainLayout>
  )
}
