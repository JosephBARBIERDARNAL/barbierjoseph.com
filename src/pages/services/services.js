import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './services.css';

function Services() {
    return (
        <div>
            <Header />
            <div className="container">

                <h2 id="services">Services</h2><hr />
                <p>I offer (freelance) <b>data analysis</b> and <b>data visualization</b> services.
                    I can help you to <b>understand your data</b>, create <b>beautiful visualizations</b>,
                    develop <b>web applications</b> and more.
                </p>
                <p>
                    I usually work with Python, R and SQL, and I do web development with either streamlit or shiny.
                </p>
                <br/>
                <p>
                    If that's something you're interested in, feel free to contact me at <b>joseph.barbierdarnal@gmail.com</b>
                </p>
                <br/>

                <h2>Visualizations</h2><hr />
                <p style={{fontSize: '24px', letterSpacing: '-1px'}}>
                    Here are some visualizations I've made:
                </p><br/>
                <div className="image-gallery">
                    <div className="image-item">
                        <img src={`${process.env.PUBLIC_URL}/img/europe-map.png`} alt="europe map" />
                        <p>Map of the European Union, based on SHARE data</p>
                    </div>
                    <div className="image-item">
                        <img src={`${process.env.PUBLIC_URL}/img/fiscal-sponsor.png`} alt="fiscal sponsorship" />
                        <p>Top Fiscal Sponsors, made for the TidyTuesday challenge</p>
                    </div>
                </div>


            </div> {/* End container */}
            <Footer />
        </div>
    );
}

export default Services;
