// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProgressBar, Card } from 'react-bootstrap';
import { FaStar, FaRegStar } from 'react-icons/fa';
import modules from '../data/modules';

function Modules() {
  const navigate = useNavigate();

  const completedModules = modules.filter((mod) => mod.completed);
  const averageScore = (
    completedModules.reduce((acc, mod) => acc + mod.score, 0) / completedModules.length
  ).toFixed(2);

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h1 className="text-primary">Dashboard - Trilha de Geografia</h1>
        <div className="mt-3 w-75 mx-auto">
          <p className="mb-1">Nota Geral</p>
          <ProgressBar
            now={isNaN(averageScore) ? 0 : averageScore}
            label={`${isNaN(averageScore) ? 0 : averageScore}%`}
          />
        </div>
      </div>

      <div className="row mt-4">
        {modules.map((module) => (
          <div key={module.id} className="col-md-6 mb-4">
            <Card
              className={`shadow-sm ${
                module.completed ? 'border-success' : 'border-secondary'
              }`}
            >
              <Card.Body>
                <Card.Title className="text-center">{module.name}</Card.Title>
                <Card.Text className="text-center">
                  {module.completed
                    ? `Módulo concluído. Nota: ${module.score}%`
                    : 'Ainda não iniciado.'}
                </Card.Text>
                <div className="d-flex justify-content-center">
                  {module.completed ? (
                    <FaStar size={24} className="text-warning" />
                  ) : (
                    <FaRegStar size={24} className="text-muted" />
                  )}
                </div>
                <div className="d-flex justify-content-center mt-3">
                  <button
                    className={`btn ${
                      module.completed ? 'btn-success' : 'btn-primary'
                    }`}
                    onClick={() =>
                      module.completed
                        ? navigate(`/review/${module.id}`) // Navega para a revisão
                        : navigate(`/game/${module.id}`) // Navega para o jogo
                    }
                  >
                    {module.completed ? 'Revisar' : 'Começar'}
                  </button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <button className="btn btn-secondary btn-lg" onClick={() => navigate('/')}>
          Voltar à Home
        </button>
      </div>
    </div>
  );
}

export default Modules;
