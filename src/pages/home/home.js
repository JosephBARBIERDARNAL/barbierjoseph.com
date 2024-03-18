import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './home.css'; 

const Home = () => {
    return (
        <div>
            <Header />
            <div className="container">

                <h2>About me</h2><hr />
                <div className="content-container">
                    <div className="text-content">
                        <p>
                            Hi! I'm Joseph Barbier, passionate about building useful technical tools.
                        </p>
                        <p>
                            My current occupations include:
                            <ul>
                                <li><b>Full-time intern</b> in data science, visualization and software with <a href='https://www.yan-holtz.com' target='_blank' rel='noreferrer'>Yan Holtz</a></li>
                                <li>Building <b>AutoSHARE</b>, a tool that automates cleaning, analysis and modelling of the <a href='https://share-eric.eu/' target='_blank' rel='noreferrer'>SHARE</a> data</li>
                                <li><b>Blogging about statistics</b> in our everyday life at <a href='https://statisticaljourney.com' target='_blank' rel='noreferrer'>statisticaljourney.com</a></li>
                            </ul>
                        </p>
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/img/joseph.png`} alt="Joseph Barbier" className="profile-image" />
                </div>
                <p>
                    In my remaining free time, I do sport, read and spend time with my friends.
                </p>
                <br />

                <h2 id="contact">Services & Contact</h2><hr />
                <div className="text-content">
                    <p>I offer <a href='/services'>data analysis</a> freelance services. If that's something you're interested in, feel free to connect.</p>
                    <p>You can contact me at <b>joseph.barbierdarnal@gmail.com</b> or via <a href="https://www.linkedin.com/in/joseph-barbier-4ab531224/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
                </div>
            </div> 
            <Footer />
        </div>
    );
}

export default Home;
