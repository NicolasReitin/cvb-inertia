import React from 'react'
import { useAuth } from '@/context/AuthContext'; // Importez useAuth


export default function Menu( {onMenuChange}) {
  const { auth } = useAuth(); // Utilise le contexte d'authentification

  // console.log(auth.role);
  const handleMenuClick = (menuItem) => {
    onMenuChange(menuItem);
  };

  return (
    <div className="menu-dashboard">
        <ul>
        <div>
            <li onClick={() => handleMenuClick('default')}>
              <img src="/assets/icones/home.png" alt="" />
                Accueil
            </li>
          </div>
          <div>
            <li onClick={() => handleMenuClick('actualites')}>
              <img src="/assets/icones/news.png" alt="" />
              Actualites
            </li>
          </div>
          <div>
            <li onClick={() => handleMenuClick('club')}>
              <img src="/assets/icones/club.png" alt="" />
                Le club
            </li>
          </div>
          <div>
            <li onClick={() => handleMenuClick('equipes')}>
              <img src="/assets/icones/team.png" alt="" />
                Les Équipes
            </li>
          </div>
          <div>
            <li onClick={() => handleMenuClick('partenaires')}>
              <img src="/assets/icones/partners.png" alt="" />
                Les partenaires
            </li>
          </div>
          <div>
            <li onClick={() => handleMenuClick('shop')}>
              <img src="/assets/icones/shop.png" alt="" />
                La boutique
            </li>
          </div>
          {auth && auth.role === 'admin' &&(
            <>
              <div>
                <li onClick={() => handleMenuClick('users')}>
                  <img src="/assets/icones/user.png" alt="" />
                    Utilisateurs
                </li>
              </div>
            </>
          )}
        </ul>
    </div>
  )
}
