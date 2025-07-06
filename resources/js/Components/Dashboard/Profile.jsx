import React, { useEffect, useState } from 'react'
import {Link, useNavigate } from 'react-router-dom';
import axios from '@/libs/axios';
import { useAuth } from '@/context/AuthContext'; // Importez useAuth

export default function Profile() {
    const { auth, adminIsLogged, loading } = useAuth(); // Utilise le contexte d'authentification
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        // console.log(auth);
        // console.log(adminIsLogged);
        if (!adminIsLogged) { 
          console.log('log non chargé');
        }
      }, [auth, adminIsLogged, loading, navigate]); 

    const handleLogout = async () => {
        try {
            await axios.post('/cvb-logout');
            // Redirigez l'utilisateur vers la page de connexion
        //   navigate('cvb-admin');
            window.location.href = '/cvb-admin';
        } catch (error) {
            console.error('Erreur lors de la déconnexion:', error);
        }
        };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

  return (
    <>
        <div className="dropdown-profil hidden sm:flex sm:items-center sm:ms-6">
            <div className="ms-3 relative">
                <button
                    type="button"
                    onClick={toggleDropdown}
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                >
                    {adminIsLogged && (
                        <>
                            {(auth.name).charAt(0).toUpperCase() + (auth.name).slice(1)}
                        </>
                    )}

                    <svg
                        className="ms-2 -me-0.5 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>

                {dropdownOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <Link
                                to="/profile.edit"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                role="menuitem"
                            >
                                Profile
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                role="menuitem"
                            >
                                Log Out
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>        
    </>
  )
}
