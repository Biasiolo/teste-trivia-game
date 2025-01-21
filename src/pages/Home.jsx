// src/pages/Home.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate(); // Hook para navegação

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-success-subtle bg-gradient">
      <div className="text-center">
        {/* Adiciona o logo acima do título */}
        <img
          src="/semfundo.png" /* Caminho do logo */
          alt="BrainDex Logo"
          className="mb-2" /* Margem inferior */
          style={{ width: '248px', height: 'auto' }} /* Tamanho do logo */
        />
        <h1 className="display-4 fw-bold text-success">Bem-vindo ao BrainDex</h1>
        <p className="lead text-secondary mt-4">
          Explore trilhas de conhecimento interativas e divirta-se aprendendo!
        </p>
        <button
          className="btn btn-success btn-lg mt-4 fw-bold"
          onClick={() => navigate('/modules')}
        >
          Explorar Trilha de Geografia
        </button>
      </div>
    </div>
  );
}

export default Home;
