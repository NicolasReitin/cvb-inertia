import { Link } from '@inertiajs/react';
import "../../../sass/dashboard.scss"
import trans from '@/lang/fr/main'

import React, { useState } from 'react'
import ButtonGold from '../ButtonGold'
import { usePage } from '@inertiajs/react';

export default function MenuNavbar({ /*auth*/ }) {
  const { auth } = usePage().props;
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
            <Link href="/" className='itemMenu'>
              <span>{trans.header.home}</span>
            </Link>
          </li>
          <li>
            <Link href="/actualites" className="itemMenu">
              <span>{trans.header.posts}</span>
            </Link>
          </li>
          <li className='dropdown-item'>
              <div className='flex'>
                <span className='whitespace-nowrap cursor-default'>{trans.header.the_club}</span>

                <div >
                  <img src="/assets/icones/arrow-down-yellow.png" />
                </div>
                <div className='dropdown-content w-64'>
                  <ul>
                    <Link href='/projet'><li>{trans.header.the_project}</li></Link>
                    <Link href='/historique'><li>{trans.header.history}</li></Link>
                    <Link href='/organigramme'><li>{trans.header.organisation_chart}</li></Link>
                    <Link href='/reglement'><li>{trans.header.internal_rules}</li></Link>
                    <Link href='/statuts'><li>{trans.header.status_of_the_association}</li></Link>
                    <Link href='/planning'><li>{trans.header.schedule}</li></Link>
                  </ul>
                </div>
              </div>
          </li>
          <li className='dropdown-item'>
              <div className='flex'>
                <span className='whitespace-nowrap cursor-default'>{trans.header.senior_team}</span>
                <div>
                  <img src="/assets/icones/arrow-down-yellow.png" />
                </div>
                <div className='dropdown-content w-64'>
                  <ul>
                    <Link href='/equipe-senior/2'><li>Nationale 3 Masculine</li></Link>
                    <Link href='/equipe-senior/3'><li>Prénationale Masculine</li></Link>
                    <Link href='/equipe-senior/4'><li>Régionale Masculine</li></Link>
                    <Link href='/equipe-senior/8'><li>Régionale Féminine</li></Link>
                    <Link href="/equipe-senior/7"><li>Départementales Masculines</li></Link>
                    <Link href="/equipe-senior/10"><li>Départementale Féminine</li></Link>
                    <Link href='/equipe-senior/1'><li>Ufolep</li></Link>
                    <Link href='/equipe-senior/9'><li>Volley assis</li></Link>
                    <Link href="/equipe-senior/11"><li>Loisirs</li></Link>
                  </ul>
                </div>
              </div>
          </li>
          <li className='dropdown-item'>
              <div className='flex'>
                <span className='whitespace-nowrap cursor-default'>{trans.header.young_team}</span>
                <div>
                  <img src="/assets/icones/arrow-down-yellow.png" />
                </div>
                <div className='dropdown-content w-44'>
                  <ul>
                    <Link href="/equipe-junior/2"><li>M13 Masculins</li></Link>
                    <Link href="/equipe-junior/3"><li>M15 Masculins</li></Link>
                    <Link href="/equipe-junior/4"><li>M18 Féminines</li></Link>
                    <Link href="/equipe-junior/5"><li>M18 Masculins</li></Link>
                    <Link href="/equipe-junior/6"><li>M21 Masculins</li></Link>
                  </ul>
                </div>
              </div>
          </li>
          <li className='dropdown-item'>
              <div className='flex'>
                <span className='whitespace-nowrap cursor-default'>{trans.header.partners}</span>
                <div>
                  <img src="/assets/icones/arrow-down-yellow.png" />
                </div>
                <div className='dropdown-content w-48'>
                  <ul>
                    <Link href='/partenaires'><li>{trans.header.our_partners}</li></Link>
                    <Link href='/devenez-partenaire'><li>{trans.header.become_partner}</li></Link>
                  </ul>
                </div>
              </div>
          </li>
          <li className='dropdown-item'>
              <div className='flex'>
                <span className='whitespace-nowrap cursor-default'>{trans.header.registrations}</span>
                <div>
                  <img src="/assets/icones/arrow-down-yellow.png" />
                </div>
                <div className='dropdown-content w-64'>
                  <ul>
                    <Link href='/tarifs'><li>{trans.header.prices}</li></Link>
                    <Link href='/modalites'><li>{trans.header.how_to_register}</li></Link>
                    <Link href='/instructions'><li>{trans.header.how_to_fill_license}</li></Link>
                    <Link href='/documents-divers'><li>{trans.header.miscellaneous_documents}</li></Link>
                  </ul>
                </div>
              </div>
          </li>
          <li>
            <Link href='/boutique' className='itemMenu'>
              <span>{trans.header.shop}</span>
            </Link>
          </li>
          {auth.user && (
            <li>
              <ButtonGold 
                href='/dashboard'
                content="Admin"
                classNameButton="bouton-admin"
              />
            </li>
          )}
        </ul>
      </div>


        {/* ------------------------------ Menu burger ------------------------------ */}
      <div className="burger-menu">
        <Link href="/">
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
              <Link href="/" className='itemMenu' onClick={closeMenu}>
                <span>{trans.header.home}</span>
              </Link>
            </li>
            <li>
              <Link href='/actualites' className='itemMenu' onClick={closeMenu}>
                <span>{trans.header.posts}</span>
              </Link>
            </li>
            <li className='dropdown-item'>             
              <span className='itemMenu' onClick={() => toggleSubMenu('club')}>
                <span>{trans.header.the_club}</span>
                <img src="/assets/icones/arrow-down-yellow.png" />
              </span>
              {openSubMenu === 'club' && (
                <ul className='submenu'>
                  <li><Link href='/projet' onClick={closeMenu}>{trans.header.the_project}</Link></li>
                  <li><Link href='/historique' onClick={closeMenu}>{trans.header.history}</Link></li>
                  <li><Link href='/organigramme' onClick={closeMenu}>{trans.header.organisation_chart}</Link></li>
                  <li><Link href='/reglement' onClick={closeMenu}>{trans.header.internal_rules}</Link></li>
                  <li><Link href='/statuts' onClick={closeMenu}>{trans.header.status_of_the_association}</Link></li>
                  <li><Link href='/planning' onClick={closeMenu}>{trans.header.schedule}</Link></li>
                </ul>
              )}
            </li>
            <li className='dropdown-item'>
              <span className='itemMenu' onClick={() => toggleSubMenu('seniors')}>
                <span>{trans.header.senior_team}</span>
                <img src="/assets/icones/arrow-down-yellow.png" />
                </span>
              {openSubMenu === 'seniors' && (
                <ul className='submenu'>
                  <li><Link href='/equipe-senior/2' onClick={closeMenu}>Nationale 3 Masculine</Link></li>
                  <li><Link href='/equipe-senior/3' onClick={closeMenu}>Prénationale Masculine</Link></li>
                  <li><Link href='/equipe-senior/4' onClick={closeMenu}>Régionale Masculine</Link></li>
                  <li><Link href='/equipe-senior/8' onClick={closeMenu}>Régionale Féminine</Link></li>
                  <li><Link href='/equipe-senior/7' onClick={closeMenu}>Départementales Masculines</Link></li>
                  <li><Link href='/equipe-senior/10' onClick={closeMenu}>Départementale Féminine</Link></li>
                  <li><Link href='/equipe-senior/1' onClick={closeMenu}>Ufolep</Link></li>
                  <li><Link href='/equipe-senior/9' onClick={closeMenu}>Volley assis</Link></li>
                  <li><Link href='/equipe-senior/11' onClick={closeMenu}>Loisirs</Link></li>
                </ul>
              )}
            </li>
            <li className='dropdown-item'>
              <span className='itemMenu' onClick={() => toggleSubMenu('juniors')}>
                <span>{trans.header.young_team}</span>
                <img src="/assets/icones/arrow-down-yellow.png" />
              </span>
              {openSubMenu === 'juniors' && (
                <ul className='submenu'>
                  <li><Link href='/equipe-junior/2' onClick={closeMenu}>M13 Masculins</Link></li>
                  <li><Link href='/equipe-junior/3' onClick={closeMenu}>M15 Masculins</Link></li>
                  <li><Link href='/equipe-junior/4' onClick={closeMenu}>M18 Féminines</Link></li>
                  <li><Link href='/equipe-junior/5' onClick={closeMenu}>M18 Masculins</Link></li>
                  <li><Link href='/equipe-junior/6' onClick={closeMenu}>M21 Masculins</Link></li>
                </ul>
              )}
            </li>
            <li className='dropdown-item'>
              <span className='itemMenu' onClick={() => toggleSubMenu('partenaires')}>
                <span>{trans.header.partners}</span>
                <img src="/assets/icones/arrow-down-yellow.png" />
              </span>
              {openSubMenu === 'partenaires' && (
                <ul className='submenu'>
                  <li><Link href='/partenaires' onClick={closeMenu}>{trans.header.our_partners}</Link></li>
                  <li><Link href='/devenez-partenaire' onClick={closeMenu}>{trans.header.become_partner}</Link></li>
                </ul>
              )}
            </li>
            <li className='dropdown-item'>
              <span className='itemMenu' onClick={() => toggleSubMenu('inscriptions')}>
                <span>{trans.header.registrations}</span>
                <img src="/assets/icones/arrow-down-yellow.png" />
              </span>
              {openSubMenu === 'inscriptions' && (
                <>
                  <ul className='submenu'>
                    <li><Link href='/tarifs' onClick={closeMenu}>{trans.header.prices}</Link></li>
                    <li><Link href='/modalites' onClick={closeMenu}>{trans.header.how_to_register}</Link></li>
                    <li><Link href='/modeEmploiLicence' onClick={closeMenu}>{trans.header.how_to_fill_license}</Link></li>
                    <li><Link href='/documentsDivers' onClick={closeMenu}>{trans.header.miscellaneous_documents}</Link></li>
                  </ul>
                </>
              )}
            </li>
            <li>
              <Link href='/boutique' className='itemMenu' onClick={closeMenu}>
                <span>{trans.header.shop}</span>
              </Link>
            </li>
            {auth.user && (
              <li>
                  <ButtonGold 
                    href='/dashboard'
                    content="Admin"
                    classNameButton="bouton-admin"
                  />
              </li>
            )}
          </ul>
        </nav>
      </div>
    </>
  )
}

                    