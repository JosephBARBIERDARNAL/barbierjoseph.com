import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './projects.css';

const Cieri = () => {
    return (
        <div>
            <Header />
            <div className="container">

                <h2>AutoSHARE</h2><hr />
                <div className="content-container">
                    <div className="text-content">
                        <div className="projectDescription">
                            <p>
                                At <a href='https://www.cieri-analytics.com' target="_blank" rel="noreferrer">cieri-analytics.com</a>, me and <a href='https://www.linkedin.com/in/thomas-salanova/' target="_blank" rel="noreferrer">Thomas Salanova</a> develop tools for social science research. Our main project is AutoSHARE, a tool that automates cleaning, analysis and modelling of the <a href='https://share-eric.eu/' target="_blank" rel="noreferrer">SHARE</a> data. You can consult the state of the project <a href='https://github.com/JosephBARBIERDARNAL/autoSHARE' target="_blank" rel="noreferrer">here</a>.
                            </p>
                            <p>
                                The Survey of Health, Ageing and Retirement in Europe (SHARE) is a multidisciplinary and cross-national panel database of micro data on health, socio-economic status and social and family networks of more than 140,000 individuals from 28 European countries. By its size and its richness, SHARE is a unique source of information for researchers in social sciences.
                            </p>
                            <p>
                                However, social science research implies a lot of data cleaning and analysis, and this can easily become a tedious and time-consuming task. For this reason, we are building a tool that automates most of these tasks for this database. We are building it using Python within a Streamlit app for the UI.
                            </p>
                            <p>
                                The aim is also to encourage and facilitate <b>reproductible research</b>. The project is <b>open source</b> and currently a work in progress.
                            </p>
                            <h3>Articles</h3>
                            <p>
                                We are also writing articles on the <a href='https://www.cieri-analytics.com/articles.html' target="_blank" rel="noreferrer">website</a> about concrete questions in statistics such as:
                                <ul>
                                    <li><a href='https://www.cieri-analytics.com/articles/large-sample-size-and-pvalue.html' target='_blank' rel='noreferrer'>Sample size and p-value: impact and relationship</a></li>
                                    <li><a href='https://www.cieri-analytics.com/articles/all-other-things-being-equal.html' target='_blank' rel='noreferrer'>What "all other things being equal" means</a></li>
                                    <li><a href='https://www.cieri-analytics.com/articles/how-to-work-with-share-python-r.html' target='_blank' rel='noreferrer'>How to work with the SHARE database</a></li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Cieri;
