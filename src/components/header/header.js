

import React from 'react';
import './header.css';

function Header() {
    return (
        <header>
            <div className="header-container">
                <a href='/'><h1 class='name'>Joseph Barbier</h1></a>
                <nav>
                    <a href="/services"><b>Services</b></a>
                    <a href="/about"><b>About</b></a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
