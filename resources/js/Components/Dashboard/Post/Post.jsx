import React, { useState } from 'react'
import PostList from './PostList'
import ButtonAddPost from './ButtonAddPost';


export default function Post() {
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
      <div className="">
        <ButtonAddPost addActualite={addActualite} />
      </div>
      <div className="liste-actus mt-24">
        <PostList actualites={actualites} setActualites={setActualites} />
      </div>
    </>
  )
}
