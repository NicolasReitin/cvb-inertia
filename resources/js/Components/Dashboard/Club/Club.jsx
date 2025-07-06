import React from 'react'

export default function Club() {
  return (
    <>
      Afficher listes des documents

      +

      un bouton pour chacun pour modifier le fichier pdf comme dans 

      <div className='flex gap-12'>
        <div>
          <div className="card" style={{border: "solid 1px black", height: '200px', width: '200px'}}>
          </div>
          <button>Modifier fichier</button>
        </div>
        <div>
          <div className="card" style={{border: "solid 1px black", height: '200px', width: '200px'}}>
          </div>
          <button>Modifier fichier</button>
        </div>
        <div>
          <div className="card" style={{border: "solid 1px black", height: '200px', width: '200px'}}>
          </div>
          <button>Modifier fichier</button>
        </div>
      </div>
    </>
  )
}
