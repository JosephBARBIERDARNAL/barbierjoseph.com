import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './education.css';

const EducationComponent = () => {
    const [selectedDegree, setSelectedDegree] = useState(null);

    const degrees = [
        {
            id: 1,
            level: 'Master',
            field: 'Applied Mathematics',
            institution: 'University of Bordeaux',
            period: '2022 - 2024',
            description: 'Specialized in statistics, machine learning and programming.'
        },
        {
            id: 2, 
            level: 'Bachelor',
            field: 'Economics',
            institution: 'University of Bordeaux',
            period: '2019 - 2022',
            description: 'Specialized in micro and macro/micro economics, econometrics and finance.'
        },
    ];

    const toggleDescription = (id) => {
        if (selectedDegree === id) {
            setSelectedDegree(null); // Clicking the same card will hide the description
        } else {
            setSelectedDegree(id); // Show description for the clicked card
        }
    };

    return (
        <div className="education-container">
            {degrees.map((degree) => (
                <motion.div
                    key={degree.id}
                    className="degree-card"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1.05 }}
                    onClick={() => toggleDescription(degree.id)}
                >
                    <h3>{degree.level} in {degree.field}</h3>
                    <p>{degree.institution}</p>
                    <p>{degree.period}</p>
                    {selectedDegree === degree.id && <p className="degree-description">{degree.description}</p>}
                </motion.div>
            ))}
        </div>
    );
};

export default EducationComponent;