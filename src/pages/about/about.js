import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Timeline from '../../components/timeline/timeline';
import ProjectGallery from '../../components/gallery/gallery';
import EducationComponent from '../../components/education/education';
import './about.css';

function About() {
    return (
        <div>
            <Header />
            <div className="container">

                <h2 id="about">Experiences</h2><hr />
                <p>
                    I'm currently a full-time intern in data science, visualization and software with <a href='https://www.yan-holtz.com' target='_blank' rel='noreferrer'>Yan Holtz</a>, but I've also worked on other things. Here you can find my resume.
                </p>
                <Timeline />

                <h2 id="about">Projects</h2><hr />
                <p>
                    I've worked on lots of various projects, from talks to web development and data analysis. I share here the most interesting ones.
                </p>
                <ProjectGallery />

                <h2 id="about">Education</h2><hr />
                <p>
                    I did my whole education at Bordeaux University and I will soon have finished my studies!
                </p>
                <EducationComponent />

            </div> {/* End container */}
            <Footer />
        </div>
    );
}

export default About;