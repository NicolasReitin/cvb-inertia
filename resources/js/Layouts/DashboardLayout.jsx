import { React, useState } from 'react';
import LogoClub from '@/Components/LogoClub';
import Profile from '@/Components/Dashboard/Profile';
import Menu from '@/Components/Dashboard/Menu';
import Users from '@/Components/Dashboard/Users/Users';
import Actualites from '@/Components/Dashboard/Actualites/Actualites';
import Club from '@/Components/Dashboard/Club/Club';
import Equipes from '@/Components/Dashboard/Equipes/Equipes';
import Partenaires from '@/Components/Dashboard/Partenaires/Partenaires';
import Shop from '@/Components/Dashboard/Shop/Shop';
import Default from '@/Components/Dashboard/Default/Default';

export default function Authenticated() {
    const [selectedMenuItem, setSelectedMenuItem] = useState('default');

    const handleMenuChange = (menuItem) => {
        setSelectedMenuItem(menuItem);
    };

    const renderSection = () => {
        switch (selectedMenuItem) {
            case 'users':
                return <Users />;
            case 'actualites':
                return <Actualites />;
            case 'club':
                return <Club />;
            case 'equipes':
                return <Equipes />;
            case 'partenaires':
                return <Partenaires />;
            case 'shop':
                return <Shop />;
            default:
                return <Default />;
        }
    };

    return (
        <>
            <div className="main">
                <aside>
                    <div className="logo-dashboard">
                        <LogoClub 
                            filePath="/assets/images/logo-cvb-black.png"
                        />
                    </div>
                    <Menu onMenuChange={handleMenuChange}/>
                </aside>
                <article>
                    <nav>
                        <Profile />
                    </nav>
                    <section>
                        {/* renvoi le menu item choisi dans le composant menu */}
                        {renderSection()}
                    </section>
                </article>
            </div>
        </>
    );
}
