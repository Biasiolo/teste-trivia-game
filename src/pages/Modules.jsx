// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProgressBar, Card } from 'react-bootstrap';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import { SlGraph } from "react-icons/sl";
import { BsGeoAlt } from 'react-icons/bs';
import { Button, Typography, Box } from '@mui/material';
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

  // Função para renderizar estrelas baseadas na pontuação
  const renderStars = (score) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (score >= i * 20) {
        stars.push(<FaStar key={i} className="text-warning" size={20} />);
      } else if (score >= (i - 1) * 20 + 10) {
        stars.push(<FaStarHalfAlt key={i} className="text-warning" size={20} />);
      } else {
        stars.push(<FaRegStar key={i} className="text-muted" size={20} />);
      }
    }
    return stars;
  };

  return (
    <div className="container p-3 mod3 rounded my-4 d-flex flex-column align-items-center">
      <Box
        className="bg-success-subtle bg-gradient rounded p-4 w-100"
        textAlign="center"
      >
        <Typography
          variant="h4"
          component="h1"
          fontWeight="bold"
          color="#34283c"
          gutterBottom
        >
          Dashboard <SlGraph /> Trilha Geografia
        </Typography>
        <Box className="mt-3 w-75 mx-auto">
          <Typography variant="body1" color="#34283c" gutterBottom>
            Nota Geral
          </Typography>
          <ProgressBar
            className="mb-4 border border-info"
            now={isNaN(averageScore) ? 0 : averageScore}
            label={`${isNaN(averageScore) ? 0 : averageScore}%`}
          />
        </Box>
      </Box>

      <div className="row mt-4 bg-success-subtle bg-gradient rounded p-4 justify-content-center w-100">
        {progressModules.map((module) => (
          <div
            key={module.id}
            className="col-lg-6 col-md-6 col-sm-12 mb-4 d-flex justify-content-center"
          >
            <Card
              className={`shadow-sm ${module.completed ? 'border-success' : ''} w-100`}
            >
              <Card.Body>
                <Card.Title className="text-center text-dark fw-bold">
                  <BsGeoAlt className="me-2 text-info" size={24} /> {module.name}
                </Card.Title>
                <Card.Text className="text-center text-secondary">
                  {module.completed
                    ? `Módulo concluído. Nota: ${module.score}%`
                    : 'Ainda não iniciado.'}
                </Card.Text>
                <div className="d-flex justify-content-center">
                  {renderStars(module.score)} {/* Renderiza estrelas com base na pontuação */}
                </div>
                <div className="d-flex justify-content-center gap-3 mt-3">
                  <Button
                    variant={module.completed ? 'outlined' : 'contained'}
                    color="primary"
                    onClick={() =>
                      module.completed
                        ? handleReview(module.id)
                        : navigate(`/game/${module.id}`)
                    }
                  >
                    {module.completed ? 'Revisar' : 'Começar'}
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => resetModuleProgress(module.id)}
                  >
                    Reiniciar
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <Box textAlign="center" mt={5}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate('/')}
        >
          Voltar à Home
        </Button>
      </Box>
    </div>
  );
}

export default Modules;
