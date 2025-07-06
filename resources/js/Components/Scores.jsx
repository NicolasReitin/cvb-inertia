import React from 'react'

export default function Scores( { id, title, height, src, style }) {
  return (
    <>
        <div className="scores">
          <h2>SAVE <span>THE DATE </span>!</h2>
          <div className='mt-8 md:mt-12 lg:mt-16'>
            <iframe 
              id={id}
              title={title}
              height={height} 
              src={src}
              style={style}>
            </iframe>
          </div>
        </div>
    </>
  )
}
