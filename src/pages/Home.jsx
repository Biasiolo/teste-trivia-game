// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate(); // Hook para navegação programática

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1 className="display-4 fw-bold text-primary">Bem-vindo ao BrainDex</h1>
        <p className="lead text-secondary mt-4">
          Escolha sua trilha de conhecimento e comece a jogar!
        </p>
        <button
          className="btn btn-primary btn-lg mt-4"
          onClick={() => navigate('/game')} // Navega para a página do jogo
        >
          Iniciar Trilha de Geografia
        </button>
      </div>
    </div>
  );
}

export default Home;
