import React, { useEffect, useState } from 'react'
import ButtonAddActu from './ButtonAddActu'
import ListeActus from './ListeActus'
import axios from '@/libs/axios';


export default function Actualites() {
  const [actualites, setActualites] = useState([]);

  useEffect(() => {
    const fetchActualites = async () => {
        try {
            const response = await axios.get('/api/dashboard');
            if (response.status === 200) {
              setActualites(response.data.actualites);
            }
        } catch (err) {
            console.error(err);
        }
    };
    fetchActualites();
}, []);

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
