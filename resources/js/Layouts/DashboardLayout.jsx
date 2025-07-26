import React from 'react';
import LogoClub from '@/Components/LogoClub';
import Profile from '@/Components/Dashboard/Profile';
import Menu from '@/Components/Dashboard/Menu';

export default function Authenticated({children}) {
    
    return (
        <>
            <div className="main">
                <aside>
                    <div className="logo-dashboard">
                        <LogoClub 
                            filePath="/assets/images/logo-cvb-white.png"
                        />
                    </div>

                    <Menu />
                </aside>
                <article>
                    <nav>
                        <Profile />
                    </nav>
                    <section>
                        {children}
                    </section>
                </article>
            </div>
        </>
    );
}
