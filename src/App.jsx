// src/App.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Modules from './pages/Modules'; // Página dos módulos
import Game from './pages/Game'; // Página do jogo (módulo selecionado)

function App() {
  return (
    <Router>
      <Routes>
        {/* Página Inicial */}
        <Route path="/" element={<Home />} />
        {/* Página de Seleção de Módulos */}
        <Route path="/modules" element={<Modules />} />
        {/* Página do Jogo (dinâmica com moduleId) */}
        <Route path="/game/:moduleId" element={<Game />} />
        {/* Rota para páginas não encontradas */}
        <Route
          path="*"
          element={
            <div className="text-center py-5">
              <h1>Página não encontrada</h1>
              <p>Por favor, retorne à página inicial.</p>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
