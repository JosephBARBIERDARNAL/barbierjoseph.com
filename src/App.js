// frontend/src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Services from './pages/services/services';
import Projects from './pages/projects/projects';
import About from './pages/about/about';
import SeulsSousLesPins from './pages/projects/seuls-sous-les-pins';
import AITalks from './pages/projects/ai-talks';
import Cieri from './pages/projects/cieri';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/seuls-sous-les-pins" element={<SeulsSousLesPins />} />
        <Route path="/ai-talks" element={<AITalks />} />
        <Route path="/cieri" element={<Cieri />} />
      </Routes>
    </Router>
  );
}

export default App;