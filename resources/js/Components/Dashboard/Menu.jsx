import { Link } from '@inertiajs/react';
import React from 'react'

export default function Menu() {

  return (
    <div className="menu-dashboard">
      <ul>
        <div>
          <Link href="/dashboard">
            <li>
              <img src="/assets/icones/home.png" alt="" />
              Dashboard
            </li>
          </Link>
        </div>
        <div>
          <Link href="/admin/actualites">
            <li>
              <img src="/assets/icones/news.png" alt="" />
              Actualites
            </li>
          </Link>
        </div>
        <div>
          <Link href="/admin/club">
            <li>
              <img src="/assets/icones/club.png" alt="" />
              Le club
            </li>
          </Link>
        </div>
        <div>
          <Link href="/admin/equipes">
            <li>
              <img src="/assets/icones/team.png" alt="" />
              Les Équipes
            </li>
          </Link>
        </div>
        <div>
          <Link href="/admin/partenaires">
            <li>
              <img src="/assets/icones/partners.png" alt="" />
              Les partenaires
            </li>
          </Link>
        </div>
        <div>
          <Link href="/admin/boutique">
            <li>
              <img src="/assets/icones/shop.png" alt="" />
              La boutique
            </li>
          </Link>
        </div>
        <div>
          <Link href="/admin/utilisateurs">
            <li>
              <img src="/assets/icones/user.png" alt="" />
              Utilisateurs
            </li>
          </Link>
        </div>
      </ul>
    </div>
  )
}
