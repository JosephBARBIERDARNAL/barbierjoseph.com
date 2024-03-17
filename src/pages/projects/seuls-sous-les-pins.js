import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './projects.css';

const SeulsSousLesPins = () => {
    return (
        <div>
            <Header />
            <div className="container">

                <h2>Vocal assistant for an exposure in Berlin</h2><hr />
                <div className="content-container">
                    <div className="text-content">
                        <div className="projectDescription">
                            <p>In summer 2023, I've met <a href='http://mauricelebrun.com' target="_blank" rel="noreferrer">Maurice Lebrun</a>, a French photographer (among others). He told me he'd like it to be possible to <b>talk to Henri Rousseau</b> during one of his exhibition.
                            </p>
                            <p>On the occasion of one of his photo exhibition at the French Institute in Berlin, <a href='http://mauricelebrun.com' target="_blank" rel="noreferrer">Maurice Lebrun</a> and I created a staging that allows us to talk with the late <b>Douanier Rousseau</b>. Maurice has been working on creating photos inspired by the Douanier Rousseau's paintings.
                            </p>
                            <p>His project is named <i>Memories of Lazarus</i> and combines photograhy with AI models (in particular diffusion models).
                            </p>
                            <div class="centered-container">
                                <img src="../img/seulssouslespins.jpeg" alt="seuls sous les pins" class="small-image" />
                                <img src="../img/exposureberlin.jpeg" alt="exposure" class="small-image" />
                            </div>
                            <p className='descriptionImage'>
                                The French Institude in Berlin during the exhibition
                            </p>
                            <p>In concrete terms, we've created a relatively simple architecture, "connecting" a
                                speech-to-text model, GPT4 prompted, and a text-to-speech model. The whole thing
                                was assembled on a <b>PureData + Streamlit</b> interface, in a dedicated room within the
                                exhibition. It took a lot of work and it was more difficult than we expected,
                                but the result is great! Moreover, Maurice Lebrun's work is really cool!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SeulsSousLesPins;
