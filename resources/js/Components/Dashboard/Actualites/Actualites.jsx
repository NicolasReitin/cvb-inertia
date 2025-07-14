import React, { useState } from 'react'
import ButtonAddActu from './ButtonAddActu'
import ListeActus from './ListeActus'


export default function Actualites() {
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
        <ButtonAddActu addActualite={addActualite} />
      </div>
      <div className="liste-actus mt-24">
        <ListeActus actualites={actualites} setActualites={setActualites} />
      </div>
    </>
  )
}
