import { Link } from '@inertiajs/react';
import React from 'react'

export default function LogoClub({ filePath }) {
  return (
    <div>
      <Link href='/'>
        <img className='logoClub' src={filePath} alt="logo CVB" />
      </Link>
    </div>
  )
}
