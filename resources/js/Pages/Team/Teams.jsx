import React from 'react'
import { usePage } from '@inertiajs/react'
import MainLayout from '@/Layouts/MainLayout';

export default function Teams() {

  const { team } = usePage().props;
  const players = team.players

  return (
    <MainLayout title={team.name}>
      <section>
        <h1>{team.name}</h1>
        {team.photo && (
          <div>
            <img 
              src={team.photo} 
              alt="Photo d'équipe"
              className='team-img' 
            />
          </div>
          )
        } 
        <h2>{team.division}</h2>

        <div className='players-cards'>
          {players &&(
            players.map((player) => (
              <div key={player.id} className='player-card'>
                <img src={player.photo} alt="player" />
                <h3>{player.last_name+ ' '+ player.first_name}</h3>
              </div>
            ))
          )
          }
        </div>
        <hr />
        {/* <div className='coach-card'>
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
        </div> */}
      </section>
    </MainLayout>
  )
}
