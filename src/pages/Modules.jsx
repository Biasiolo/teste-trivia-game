// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProgressBar, Card } from 'react-bootstrap';
import { FaStar, FaRegStar } from 'react-icons/fa';
import modules from '../data/modules';

function Modules() {
  const navigate = useNavigate();
  const [progressModules, setProgressModules] = useState([]);

  useEffect(() => {
    const savedModules = JSON.parse(localStorage.getItem('modules')) || [];
    setProgressModules(savedModules.length ? savedModules : modules);
  }, []);

  const completedModules = progressModules.filter((mod) => mod.completed);
  const averageScore = (
    completedModules.reduce((acc, mod) => acc + mod.score, 0) /
    (completedModules.length || 1)
  ).toFixed(2);

  const resetModuleProgress = (moduleId) => {
    const confirmReset = window.confirm(
      'Tem certeza de que deseja reiniciar o progresso desta trilha? Todo o progresso será perdido.'
    );
    if (confirmReset) {
      const updatedModules = progressModules.map((module) =>
        module.id === moduleId
          ? { ...module, completed: false, score: 0 }
          : module
      );
      localStorage.setItem('modules', JSON.stringify(updatedModules));
      setProgressModules(updatedModules);
      alert('Progresso da trilha reiniciado com sucesso!');
    }
  };

  const handleReview = (moduleId) => {
    const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    const moduleReview = savedReviews.find((review) => review.moduleId === moduleId);

    if (moduleReview) {
      navigate(`/review/${moduleId}`);
    } else {
      alert('Revisão não encontrada para este módulo!');
    }
  };

  return (
    <div className="container p-5 bg-success-subtle bg-gradient rounded mt-5">
      <div className="text-center mb-4">
        <h1 className="text-dark">Dashboard - Trilha de Geografia</h1>
        <div className="mt-3 w-75 mx-auto">
          <p className="mb-1">Nota Geral</p>
          <ProgressBar
            now={isNaN(averageScore) ? 0 : averageScore}
            label={`${isNaN(averageScore) ? 0 : averageScore}%`}
          />
        </div>
      </div>

      <div className="row mt-4">
        {progressModules.map((module) => (
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
                      module.completed ? 'btn-outline-success' : 'btn-success'
                    } me-2`}
                    onClick={() =>
                      module.completed
                        ? handleReview(module.id) // Navega para a revisão
                        : navigate(`/game/${module.id}`) // Navega para o jogo
                    }
                  >
                    {module.completed ? 'Revisar' : 'Começar'}
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => resetModuleProgress(module.id)}
                  >
                    Reiniciar
                  </button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <button className="btn btn-secondary btn-lg me-3" onClick={() => navigate('/')}>Voltar à Home</button>
      </div>
    </div>
  );
}

export default Modules;