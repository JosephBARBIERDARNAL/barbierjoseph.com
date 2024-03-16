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
                        <p>Hi! I'm Joseph Barbier.</p>
                        <p>
                            I am passionate about working in a technical environment and have a keen interest in things related to knowledge.
                            I am particularly interested in topics such as: how statistics allow us to make <b>inferences</b>, the impact of <b>large language models</b>
                            and more generally data mining. In my remaining free time, I do sport, read and spend time with my friends.
                        </p>
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/img/joseph.png`} alt="Joseph Barbier" className="profile-image" />
                </div>
                <p>
                    Since March, I've been working as a data science/viz/software intern with <a href="https://www.yan-holtz.com/" target="_blank" rel="noopener noreferrer">Yan Holtz</a>.
                </p><br />

                <h2 id="services">Services</h2><hr />
                <p>I offer <strong>data analysis</strong> and <strong>data visualization</strong> services.
                    I can help you to <strong>understand your data</strong> and create <strong>beautiful visualizations</strong>.
                </p>
                <p>If that's something you're interested in, feel free to contact me at
                    <b>joseph.barbierdarnal@gmail.com</b> and I'd be happy to discuss it with you.
                </p><br />

                <h2 id="contact">Contact</h2><hr />
                <p>You can contact me at <b>joseph.barbierdarnal@gmail.com</b> or via <a href="https://www.linkedin.com/in/joseph-barbier-4ab531224/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
                </p>
            </div> {/* End container */}
            <Footer />
        </div>
    );
}

export default Home;
