import React from 'react';
import './header.css'; 

function Header() {
    return (
        <header>
            <div class="header-container">
                <div class="text-and-logos"><br/>
                    <a href='index.html'><h1>Joseph Barbier</h1></a>
                    <div class="logos">
                        <a href="https://www.linkedin.com/in/joseph-barbier-4ab531224/" target="_blank">
                            <img src="img/linkedin.png" alt="LinkedIn" class="logo"/>
                        </a>
                        <a href="https://github.com/JosephBARBIERDARNAL" target="_blank">
                            <img src="img/github.png" alt="GitHub" class="logo"/>
                        </a>
                    </div>
                </div>
            </div><br/><br/>
                <nav>
                    <a href="index.html"><b>Home</b></a>
                    <a href="work.html"><b>Work</b></a>
                </nav>
            </header>
    );
}

export default Header;
