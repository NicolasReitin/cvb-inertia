import { Link } from '@inertiajs/react';

import React, { useState } from 'react'
import ButtonGold from '../ButtonGold'
import "../../../sass/dashboard.scss"

// import { useAuth } from '@/context/AuthContext'; // Importez useAuth

export default function MenuNavbar({ /*auth*/ }) {
// console.log(auth.user);
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenSubMenu(null);
  };

  const toggleSubMenu = (menu) => {
    if (openSubMenu === menu) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(menu);
    }
  };

  return (
    <>
        {/* ------------------------------ Menu desktop ------------------------------ */}

      <div className='menu-desktop'>
        <ul className='MenuNavbar mt-8'>
          <li>
            <Link to="/" className='itemMenu'>
              <span>Accueil</span>
            </Link>
          </li>
          <li>
            <Link to='/actualites' className='itemMenu'>
                <span>Actualités</span>
            </Link>
          </li>
          <li className='dropdown-item'>
              <div className='flex'>
                <span className='whitespace-nowrap cursor-default'>Le club</span>

                <div >
                  <img src="/assets/icones/arrow-down-yellow.png" />
                </div>
                <div className='dropdown-content w-64'>
                  <ul>
                    <Link to='/projet'><li>Le projet</li></Link>
                    <Link to='/historique'><li>Historique</li></Link>
                    <Link to='/organigramme'><li>Organigramme</li></Link>
                    <Link to='/reglement'><li>Règlement intérieur</li></Link>
                    <Link to='/statuts'><li>Les statuts de l'association</li></Link>
                    <Link to='/planning'><li>Planning / entrainements</li></Link>
                  </ul>
                </div>
              </div>
          </li>
          <li className='dropdown-item'>
              <div className='flex'>
                <span className='whitespace-nowrap cursor-default'>Équipes séniors</span>
                <div>
                  <img src="/assets/icones/arrow-down-yellow.png" />
                </div>
                <div className='dropdown-content w-64'>
                  <ul>
                    {/* <Link to={route('equipe.index', 2)}>Nationale 3 Masculine</Link> */}
                    <Link to='/equipe-senior/2'><li>Nationale 3 Masculine</li></Link>
                    <Link to='/equipe-senior/3'><li>Prénationale Masculine</li></Link>
                    <Link to='/equipe-senior/4'><li>Régionale Masculine</li></Link>
                    <Link to='/equipe-senior/8'><li>Régionale Féminine</li></Link>
                    <Link to="/equipe-senior/7"><li>Départementales Masculines</li></Link>
                    <Link to="/equipe-senior/10"><li>Départementale Féminine</li></Link>
                    <Link to='/equipe-senior/1'><li>Ufolep</li></Link>
                    <Link to='/equipe-senior/9'><li>Volley assis</li></Link>
                    <Link to="/equipe-senior/11"><li>Loisirs</li></Link>
                  </ul>
                </div>
              </div>
          </li>
          <li className='dropdown-item'>
              <div className='flex'>
                <span className='whitespace-nowrap cursor-default'>Équipes jeunes</span>
                <div>
                  <img src="/assets/icones/arrow-down-yellow.png" />
                </div>
                <div className='dropdown-content w-44'>
                  <ul>
                    <Link to="/equipe-junior/2"><li>M13 Masculins</li></Link>
                    <Link to="/equipe-junior/3"><li>M15 Masculins</li></Link>
                    <Link to="/equipe-junior/4"><li>M18 Féminines</li></Link>
                    <Link to="/equipe-junior/5"><li>M18 Masculins</li></Link>
                    <Link to="/equipe-junior/6"><li>M21 Masculins</li></Link>
                  </ul>
                </div>
              </div>
          </li>
          <li className='dropdown-item'>
              <div className='flex'>
                <span className='whitespace-nowrap cursor-default'>Partenaires</span>
                <div>
                  <img src="/assets/icones/arrow-down-yellow.png" />
                </div>
                <div className='dropdown-content w-48'>
                  <ul>
                    <Link to='/partenaires'><li>Nos partenaires</li></Link>
                    <Link to='/devenez-partenaire'><li>Devenez partenaire</li></Link>
                  </ul>
                </div>
              </div>
          </li>
          <li className='dropdown-item'>
              <div className='flex'>
                <span className='whitespace-nowrap cursor-default'>Inscriptions</span>
                <div>
                  <img src="/assets/icones/arrow-down-yellow.png" />
                </div>
                <div className='dropdown-content w-64'>
                  <ul>
                    <Link to='/tarifs'><li>Tarifs</li></Link>
                    <Link to='/modalites'><li>Modalités d'inscription</li></Link>
                    <Link to='/modeEmploiLicence'><li>Comment remplir sa licence</li></Link>
                    <Link to='/documentsDivers'><li>Documents divers</li></Link>
                  </ul>
                </div>
              </div>
          </li>
          <li>
            <Link to='/boutique' className='itemMenu'>
              <span>Boutique</span>
            </Link>
          </li>

            <ButtonGold 
              href='/dashboard'
              content="Admin"
              classNameButton="bouton-admin"
            />
        </ul>
      </div>


        {/* ------------------------------ Menu burger ------------------------------ */}
      <div className="burger-menu">
        <Link to="/">
          <img src="/assets/images/logo-cvb-black.png" alt="Logo" className="menu-logo-burger" />
        </Link>
        <button onClick={toggleMenu} className="burger-button">
          <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#303030" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="arcs">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <nav className={`burger-nav ${isOpen ? 'open' : ''}`}>
          <button onClick={closeMenu} className="close-button">
            <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#303030" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="arcs">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <ul>
            <li>
              <Link to="/" className='itemMenu' onClick={closeMenu}>
                <span>Accueil</span>
              </Link>
            </li>
            <li>
              <Link to='/actualites' className='itemMenu' onClick={closeMenu}>
                <span>Actualités</span>
              </Link>
            </li>
            <li className='dropdown-item'>             
              <span className='itemMenu' onClick={() => toggleSubMenu('club')}>
                <span>Le club</span>
                <img src="/assets/icones/arrow-down-yellow.png" />
              </span>
              {openSubMenu === 'club' && (
                <ul className='submenu'>
                  <li><Link to='/projet' onClick={closeMenu}>Le projet</Link></li>
                  <li><Link to='/historique' onClick={closeMenu}>Historique</Link></li>
                  <li><Link to='/organigramme' onClick={closeMenu}>Organigramme</Link></li>
                  <li><Link to='/reglement' onClick={closeMenu}>Règlement intérieur</Link></li>
                  <li><Link to='/statuts' onClick={closeMenu}>Les statuts de l'association</Link></li>
                  <li><Link to='/planning' onClick={closeMenu}>Planning / entrainements</Link></li>
                </ul>
              )}
            </li>
            <li className='dropdown-item'>
              <span className='itemMenu' onClick={() => toggleSubMenu('seniors')}>
                <span>Équipes séniors</span>
                <img src="/assets/icones/arrow-down-yellow.png" />
                </span>
              {openSubMenu === 'seniors' && (
                <ul className='submenu'>
                  <li><Link to='/equipe-senior/2' onClick={closeMenu}>Nationale 3 Masculine</Link></li>
                  <li><Link to='/equipe-senior/3' onClick={closeMenu}>Prénationale Masculine</Link></li>
                  <li><Link to='/equipe-senior/4' onClick={closeMenu}>Régionale Masculine</Link></li>
                  <li><Link to='/equipe-senior/8' onClick={closeMenu}>Régionale Féminine</Link></li>
                  <li><Link to='/equipe-senior/7' onClick={closeMenu}>Départementales Masculines</Link></li>
                  <li><Link to='/equipe-senior/10' onClick={closeMenu}>Départementale Féminine</Link></li>
                  <li><Link to='/equipe-senior/1' onClick={closeMenu}>Ufolep</Link></li>
                  <li><Link to='/equipe-senior/9' onClick={closeMenu}>Volley assis</Link></li>
                  <li><Link to='/equipe-senior/11' onClick={closeMenu}>Loisirs</Link></li>
                </ul>
              )}
            </li>
            <li className='dropdown-item'>
              <span className='itemMenu' onClick={() => toggleSubMenu('juniors')}>
                <span>Équipes jeunes</span>
                <img src="/assets/icones/arrow-down-yellow.png" />
              </span>
              {openSubMenu === 'juniors' && (
                <ul className='submenu'>
                  <li><Link to='/equipe-junior/2' onClick={closeMenu}>M13 Masculins</Link></li>
                  <li><Link to='/equipe-junior/3' onClick={closeMenu}>M15 Masculins</Link></li>
                  <li><Link to='/equipe-junior/4' onClick={closeMenu}>M18 Féminines</Link></li>
                  <li><Link to='/equipe-junior/5' onClick={closeMenu}>M18 Masculins</Link></li>
                  <li><Link to='/equipe-junior/6' onClick={closeMenu}>M21 Masculins</Link></li>
                </ul>
              )}
            </li>
            <li className='dropdown-item'>
              <span className='itemMenu' onClick={() => toggleSubMenu('partenaires')}>
                <span>Partenaires</span>
                <img src="/assets/icones/arrow-down-yellow.png" />
              </span>
              {openSubMenu === 'partenaires' && (
                <ul className='submenu'>
                  <li><Link to='/partenaires' onClick={closeMenu}>Nos partenaires</Link></li>
                  <li><Link to='/devenez-partenaire' onClick={closeMenu}>Devenez partenaire</Link></li>
                </ul>
              )}
            </li>
            <li className='dropdown-item'>
              <span className='itemMenu' onClick={() => toggleSubMenu('inscriptions')}>
                <span>Inscriptions</span>
                <img src="/assets/icones/arrow-down-yellow.png" />
              </span>
              {openSubMenu === 'inscriptions' && (
                <>
                  <ul className='submenu'>
                    <li><Link to='/tarifs' onClick={closeMenu}>Tarifs</Link></li>
                    <li><Link to='/modalites' onClick={closeMenu}>Modalités d'inscription</Link></li>
                    <li><Link to='/modeEmploiLicence' onClick={closeMenu}>Comment remplir sa licence</Link></li>
                    <li><Link to='/documentsDivers' onClick={closeMenu}>Documents divers</Link></li>
                  </ul>
                </>
              )}
            </li>
            <li>
              <Link to='/boutique' className='itemMenu' onClick={closeMenu}>
                <span>Boutique</span>
              </Link>
            </li>
              <ButtonGold 
                href='/dashboard'
                content="Admin"
                classNameButton="bouton-admin"
              />
          </ul>
        </nav>
      </div>
      


      
    </>
  )
}

                    