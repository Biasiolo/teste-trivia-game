// src/pages/Modules.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import modules from '../data/modules'; // Importa os módulos

function Modules() {
  const navigate = useNavigate();

  // Calcula a média de desempenho
  const averageScore = (
    modules.filter((mod) => mod.completed).reduce((acc, mod) => acc + mod.score, 0) /
    modules.filter((mod) => mod.completed).length
  ).toFixed(2);

  return (
    <div className="container py-5">
      <h1 className="text-primary text-center mb-4">Módulos da Trilha de Geografia</h1>
      <p className="text-secondary text-center">
        Seu desempenho geral: <strong>{isNaN(averageScore) ? '0' : averageScore}%</strong>
      </p>
      <div className="row mt-4">
        {modules.map((module) => (
          <div key={module.id} className="col-md-6 mb-4">
            <div className={`card ${module.completed ? 'border-success' : 'border-secondary'}`}>
              <div className="card-body">
                <h5 className="card-title">{module.name}</h5>
                <p className="card-text">
                  {module.completed
                    ? `Módulo concluído. Nota: ${module.score}%`
                    : 'Ainda não iniciado.'}
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate(`/game/${module.id}`)} // Passa o ID do módulo para a rota dinâmica
                  disabled={module.completed} // Bloqueia se já estiver concluído
                >
                  {module.completed ? 'Concluído' : 'Começar'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Modules;
