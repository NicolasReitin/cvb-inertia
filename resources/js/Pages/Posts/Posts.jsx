import React, { useEffect } from 'react'
import '../../../sass/posts.scss'
import { Link, usePage } from '@inertiajs/react';
import moment from 'moment';
import ButtonGold from '@/Components/ButtonGold';
import MainPhoto from '@/Components/Header/MainPhoto';
import MainLayout from '@/Layouts/MainLayout';

export default function Posts() {

    const { posts } = usePage().props;
    const newsArray = posts.data;

    useEffect(() => {
        adjustImageFit();
    }, [newsArray]); // Réajuster chaque fois que les actualités changent

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
      <MainLayout title='Actualités'>
        <div className='bloc-main-photo'>
            <MainPhoto 
            src='/assets/images/cover2baw.webp'
            alt={"Caen Volley Ball Photo"}
            className={'main-photo'}
            />
        </div>    
                
        <section className='flex'>
            <div className='w-full'>
                <h1>ACTUALITÉS</h1>
                <div className='cards'>
                    {
                        newsArray.map((post)=> (
                            <div className='card' key={post.data.id}>
                                {/* <Link href={route('post.data.show', {post: post.id})}> */}
                                <Link href={`/actualites/${post.data.id}`}>
                                    <div className='relative'>
                                        <img src={post.data.photo} alt="actualité" className="w-full h-auto" />
                                        <div className="filtre-img absolute inset-0"></div>
                                    </div>
                                    <h2>{ post.data.title }</h2> 
                                    <h3>Le { moment(post.data.created_at).locale('fr').format('DD/MM/YYYY') }</h3>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                {/* Afficher la pagination avec <Link> */}
                <div className='flex justify-center gap-8'>
                    {posts.prev_page_url && (
                        <>
                            <ButtonGold
                                href = {posts.prev_page_url}
                                classNameButton = 'button-next-previous' 
                                content = {
                                    <>
                                        <img src="assets/icones/left.png" alt="next" />
                                    </>
                                }
                            />
                            {/* <Link href={posts.prev_page_url}>Précédent</Link> */}
                        </>
                    )}
                    {posts.next_page_url && (
                        <>
                            <ButtonGold
                                href = {posts.next_page_url}
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
        </section>  

      </MainLayout>
    </>
  )
}


