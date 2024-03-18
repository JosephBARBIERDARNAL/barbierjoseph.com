import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './projects.css';

const StatisticalJourney = () => {
    return (
        <div>
            <Header />
            <div className="container">

                <h2>Statistical Journey</h2><hr />
                <div className="content-container">
                    <div className="text-content">
                        <div className="projectDescription">
                            <p>I've created a website to learn about statistics, for everyone. It's called <a href='https://www.statisticaljourney.com' target="_blank" rel='noreferrer'>Statistical Journey</a>. The articles are intended to be <b>non-technical</b> and <b>narrative</b>, to make them more enjoyable to read.
                            </p>
                            <p>
                                The goal of these articles is to facilitate the work of those who need to understand and use data analysis tools as well as participate in the development of a <b>culture of statistics</b>.
                            </p>
                            <p>
                                Here's an exauhstive list of the articles I've written so far:
                                <ul>
                                    <li><a href='https://www.statisticaljourney.com/posts/statistics-in-our-daily-life.html' target="_blank" rel='noreferrer'>Statistics in our daily life</a></li>
                                    <li><a href='https://www.statisticaljourney.com/posts/be-careful-when-doing-statistics.html' target="_blank" rel='noreferrer'>Be careful when doing statistics</a></li>
                                    <li><a href='https://www.statisticaljourney.com/posts/chatgpt-metric-is-not-truthfulness.html' target="_blank" rel='noreferrer'>ChatGPT's metric is not truthfulness</a></li>
                                    <li><a href='https://www.statisticaljourney.com/posts/how-self-study-statistics.html' target="_blank" rel='noreferrer'>How to self-study statistics?</a></li>
                                    <li><a href='https://www.statisticaljourney.com/posts/its-not-even-correlation.html' target="_blank" rel='noreferrer'>It's not even correlation</a></li>
                                    <li><a href='https://www.statisticaljourney.com/posts/make-stats-say-things-they-dont.html' target="_blank" rel='noreferrer'>The public statistics trade-off</a></li>
                                    <li><a href='https://www.statisticaljourney.com/posts/regrets-of-chatgpt.html' target="_blank" rel='noreferrer'>Does ChatGPT have regrets?</a></li>
                                    <li><a href='https://www.statisticaljourney.com/posts/impact-of-transformer-architectures.html' target="_blank" rel='noreferrer'>Impact of the transformer architecture</a></li>
                                    <li><a href='https://www.statisticaljourney.com/posts/statistics-is-finding-whats-random.html' target="_blank" rel='noreferrer'>Statistics try to find what's random</a></li>
                                </ul>
                            </p>
                            <br/>
                            <h3>Feeback and Contributions</h3>
                            <p>
                                I'm always looking for feedback and/or contributions. If you have an opinion to share, an idea for an article or if you want to contribute, check the <a href='https://github.com/JosephBARBIERDARNAL/statisticaljourney.com' target="_blank" rel='noreferrer'>the repo of the project</a> or <a href='/'>contact me</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default StatisticalJourney;
