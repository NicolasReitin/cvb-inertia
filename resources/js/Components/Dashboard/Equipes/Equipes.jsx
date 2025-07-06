import React, { useEffect, useState } from 'react'
import axios from '@/libs/axios';


export default function Equipes() {
  
  const [joueurs, setJoueurs] = useState([]);
  const [equipesJeunes, setEquipesJeunes] = useState([]);
  const [equipesSeniors, setEquipesSeniors] = useState([]);

  useEffect(() =>{
      // Fonction asynchrone pour récupérer les articles
      const fetchActualites = async() => {
        try {
          const response = await axios.get('/api/dashboard')
          setJoueurs(response.data.joueurs)
          setEquipesJeunes(response.data.equipesJeunes)
          setEquipesSeniors(response.data.equipesSeniors)
                      
        } catch (err) {
          console.error(err);
        }
      }
      fetchActualites();
  }, []);

  return (
    <div>Equipes</div>
  )
}
