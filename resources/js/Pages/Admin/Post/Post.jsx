import React, { useState } from 'react'
import { Head } from '@inertiajs/react';
import DashboardLayout from '@/Layouts/DashboardLayout';
import ButtonAddPost from '@/Components/Dashboard/Post/ButtonAddPost';
import PostList from '@/Components/Dashboard/Post/PostList';


export default function Dashboard() {
  const [actualites, setActualites] = useState([]);

  const addActualite = async (newActu) => {
      try {
        setActualites(prevActualites => [newActu, ...prevActualites]);
      } catch (error) {
        console.error("Erreur lors de l'ajout de l'actualité :", error.message);
      }
  };

  return (
    <>
      <Head title = "Admin - Actualités" />

      <DashboardLayout>

        <div className="">
          <ButtonAddPost addActualite={addActualite} />
        </div>
        <div className="liste-actus mt-24">
          <PostList actualites={actualites} setActualites={setActualites} />
        </div>

      </DashboardLayout>
    </>
  );
  
}
