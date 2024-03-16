// frontend/src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Routes>
    </Router>
  );
}

export default App;