import React, { useState, useRef, useEffect } from 'react';
import './timeline.css'; 
import experiences from '../experiences';


const TimelineItem = ({ title, period, details }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [contentHeight, setContentHeight] = useState("0px");
    const contentRef = useRef(null);

    useEffect(() => {
        setContentHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }, [isOpen]);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className="timeline-item" onClick={toggleOpen}>
            <div className="title">{title}</div>
            <div className="period">{period}</div>
            <div
                ref={contentRef}
                style={{ maxHeight: `${contentHeight}` }}
                className="content"
                
            >
                <div className="details">{details}</div>
            </div>
        </div>
    );
};

const Timeline = () => {
    return (
        <div className="timeline">
            {experiences.map(exp => (
                <TimelineItem key={exp.id} {...exp} />
            ))}
        </div>
    );
};

export default Timeline;
