import { React, useState } from 'react';
import LogoClub from '@/Components/LogoClub';
import Profile from '@/Components/Dashboard/Profile';
import Menu from '@/Components/Dashboard/Menu';
import Users from '@/Components/Dashboard/Users/Users';
import Club from '@/Components/Dashboard/Club/Club';
import Shop from '@/Components/Dashboard/Shop/Shop';
import Default from '@/Components/Dashboard/Default/Default';
import Post from '@/Components/Dashboard/Post/Post';
import Partner from '@/Components/Dashboard/Partner/Partner';
import Team from '@/Components/Dashboard/Team/Team';

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
                return <Post />;
            case 'club':
                return <Club />;
            case 'equipes':
                return <Team />;
            case 'partenaires':
                return <Partner />;
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
