import React from 'react';
import './gallery.css'; 

const projects = [
    {
        id: 1,
        title: 'Reviving Henri Rousseau',
        description: 'Building an interface to speak with the late Henri Rousseau, as part of an exhibition',
        imageUrl: `${process.env.PUBLIC_URL}/img/douanier.png`,
        projectLink: '/seuls-sous-les-pins'
    },
    {
        id: 2,
        title: 'AI safety talks',
        description: 'Conferences on safety issues related to large language models at Ecole 42 and Bordeaux University',
        imageUrl: `${process.env.PUBLIC_URL}/img/effisciences.png`,
        projectLink: '/ai-talks'
    },
    {
        id: 3,
        title: 'AutoSHARE',
        description: 'Automating the cleaning, analysis and modelling of the SHARE data',
        imageUrl: `${process.env.PUBLIC_URL}/img/cieri-analytics.png`,
        projectLink: '/cieri'
    },
    {
        id: 4,
        title: 'Statistical Journey',
        description: 'A website to learn about statistics with non-technical and narrative style',
        imageUrl: `${process.env.PUBLIC_URL}/img/statisticaljourney.png`,
        projectLink: '/statistical-journey'
    }
];

const ProjectItem = ({ title, description, imageUrl, projectLink }) => {
    return (
        <div className="project-item" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="project-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={projectLink}>View Project</a>
            </div>
        </div>
    );
};

const ProjectGallery = () => {
    return (
        <div className="project-gallery">
            {projects.map(project => (
                <ProjectItem key={project.id} {...project} />
            ))}
        </div>
    );
};

export default ProjectGallery;
