// components/VisualizationCard.tsx
"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Visualization } from '../dataviz/listOfViz';
import Spacing from './spacing';

interface VisualizationCardProps {
  viz: Visualization;
}

const VisualizationCard: React.FC<VisualizationCardProps> = ({ viz }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="mb-8">
      <h2 className="flex justify-center text-2xl font-light text-white mb-2">{viz.title}</h2>
      <br/>
      <div className="flex justify-center">
        <img
          src={viz.image}
          alt={viz.title}
          className="w-1/2 h-auto cursor-pointer transition-transform duration-500 hover:scale-105"
          onClick={() => setIsOpen(true)}
        />
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
          <div ref={popupRef} className="flex max-w-4xl w-full relative z-10">
            <div className="w-full p-4">
              <img src={viz.gif} alt={viz.title} className="w-full h-auto object-contain" />
            </div>
            <div className="w-1/2 bg-opacity-75 p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">{viz.title}</h2>
                <br/>
                <p className="text-white mb-4 text-sm" dangerouslySetInnerHTML={{ __html: viz.description }}></p>
              </div>
              <div className="flex">
                <a
                  href={viz.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="code-btn text-white px-4 py-2 rounded transition-colors text-sm"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      <Spacing size={3}/>
      <hr/>
      <Spacing size={1}/>
    </div>
  );
};

export default VisualizationCard;