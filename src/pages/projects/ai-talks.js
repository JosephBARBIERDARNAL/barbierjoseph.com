import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './projects.css';

const AITalks = () => {
    return (
        <div>
            <Header />
            <div className="container">

                <h2>AI safety talks</h2><hr />
                <div className="content-container">
                    <div className="text-content">
                        <div className="projectDescription">
                            <h3>EffiSciences</h3>
                            <p>In 2022, I co-gave 2 talks with the <a href="https://www.effisciences.org" target="_blank" rel='noreferrer'>EffiSciences</a> organization.</p>
                            <p><i>"EffiSciences is a collective of alumni of the Écoles Normales Supérieures (ENS), promoting mission-driven research to tackle the world's problems."</i></p>
                            <p>These talks focused on AI safety, and more specifically on the development of large language models. I highlighted the relevance of conceptual problems in the context of AI agents and how they could behave maliciously. I discussed Goodhart's law, the problem of misspecified reward and the problem of instrumental convergence, particularly in reinforcement learning agents.</p>
                            <h3>Bordeaux University</h3>
                            <p>Later in 2022, I gave a short presentation at the University of Bordeaux for economics undergraduates as part of Pascale Roux's course on networks and the information society. I talked about how large language models like ChatGPT work, related problems and how to use them.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AITalks;
