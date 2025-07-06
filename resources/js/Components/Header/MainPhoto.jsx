import React from 'react'

export default function MainPhoto({ src, alt, className, loading }) {
  return (
    <>
        <div className={className}>
            <img 
              src={src}
              alt={alt} 
              loading={loading || 'lazy'} // Default to lazy if not specified
            />
        </div>
        
    </>
  )
}
