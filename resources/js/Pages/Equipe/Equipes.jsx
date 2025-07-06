import Footer from '@/Layouts/Footer'
import Header from '@/Layouts/Header'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../../../sass/equipes.scss'  
import axios from '@/libs/axios';


export default function Equipes( {auth, equipeType} ) {
  const { equipe_id } = useParams();
  const [equipe, setEquipe] = useState([]);
  const [coachs, setCoachs] = useState([]);
  const [joueurs, setJoueurs] = useState([]);

  useEffect(() =>{
    const fetchEquipe = async() => {
      try {
        let url = `/api/equipe-${equipeType}/${equipe_id}`;
        const response = await axios.get(url)
        setEquipe(response.data.equipe)
        setCoachs(response.data.coachs)
        if (response.data.equipe) {
          setJoueurs(response.data.equipe.joueurs);
        }              
      } catch (err) {
        console.error(err);
      }
    }

    fetchEquipe();
  }, [equipe_id, equipeType]); // Ajouter equipe_id et equipeType comme dépendance


  return (
    <>
        {/* <Head title={equipe.nom} /> */}

        <Header auth={auth}/>      
        
        <section>
          <h1>{equipe.nom}</h1>
          {equipe.photo && (
            <div>
              <img 
                src={equipe.photo} 
                alt="Photo d'équipe"
                className='team-img' 
              />
            </div>
            )
          } 
          <h2>{equipe.division}</h2>

          <div className='players-cards'>
            {joueurs &&(
              joueurs.map((joueur) => (
                <div key={joueur.id} className='player-card'>
                  <img src={joueur.photo} alt="player" />
                  <h3>{joueur.nom+ ' '+ joueur.prenom}</h3>
                </div>
              ))
            )
            }
          </div>
          <hr />
          <div className='coach-card'>
            {coachs && coachs.length > 0 &&(
              <>
                <h2 className='mt-2'>Coachs</h2>
                <div className="flex justify-center">
                  {
                  coachs.map((coach) => (
                    <div key={coach.id}>
                      {coach.photo ?(
                        <img src={coach.photo} alt="coach" />
                        ) : (
                        <img className='no-player' src="/assets/images/equipes/no-player.png" alt="pas d'image" />
                        )
                      }                    
                      <h3>{coach.nom + ' ' + coach.prenom}</h3>
                    </div>
                  ))
                  }                
                </div>
              </>
            )}
          </div>
        </section>



        <Footer />
    </>
  )
}
