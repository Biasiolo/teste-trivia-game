// src/App.jsx
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Modules from './pages/Modules';
import Game from './pages/Game';
import Review from './pages/Review';
import modules from './data/modules';
import { getProgress, initializeProgress } from './utils/storage';

function App() {
  useEffect(() => {
    if (!getProgress()) {
      initializeProgress(modules); // Inicializa os dados do progresso
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/game/:moduleId" element={<Game />} />
        <Route path="/review/:moduleId" element={<Review />} />
      </Routes>
    </Router>
  );
}

export default App;
