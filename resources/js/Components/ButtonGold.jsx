import { Link } from '@inertiajs/react';
import React from 'react'

export default function ButtonGold({ href, content, classNameButton }) {
  return (
    <>
        <div className={classNameButton}>
            <Link href={href}>
                <p>{content}</p>
            </Link>
        </div>
    </>
  )
}
