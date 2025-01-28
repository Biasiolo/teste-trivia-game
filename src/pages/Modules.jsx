// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProgressBar, Card } from 'react-bootstrap';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import { SlGraph } from "react-icons/sl";
import { FaPlay } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { Button, Typography, Box } from '@mui/material';
import modules from '../data/modules';

const MODULES_VERSION = '1.3'; // Atualizar versão para deploy com novos módulos.

function Modules() {
  const navigate = useNavigate();
  const [progressModules, setProgressModules] = useState([]);

  useEffect(() => {
    const savedVersion = localStorage.getItem('modulesVersion');
    const savedModules = JSON.parse(localStorage.getItem('modules')) || [];

    if (savedVersion !== MODULES_VERSION) {
      // Atualiza módulos se a versão for diferente
      const updatedModules = modules.map((module) => {
        const existingModule = savedModules.find((m) => m.id === module.id);
        return existingModule
          ? { ...module, ...existingModule } // Mantém progresso existente
          : { ...module, completed: false, score: 0 }; // Novo módulo
      });

      localStorage.setItem('modules', JSON.stringify(updatedModules));
      localStorage.setItem('modulesVersion', MODULES_VERSION);
      setProgressModules(updatedModules);
    } else {
      setProgressModules(savedModules);
    }
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
        className="bg-light bg-gradient rounded p-4 w-100"
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

      <div className="row mt-4 bg-light bg-gradient rounded p-4 justify-content-center w-100">
        {progressModules.map((module) => (
          <div
            key={module.id}
            className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex justify-content-center"
          >
            <Card
              className={`shadow-sm ${module.completed ? 'border-info bg-success-subtle' : ''} w-100 text-center`}
            >
              <Card.Body>
                <Card.Title className="text-center titulo-mod text-dark fw-bold">
                  {module.name}
                </Card.Title>
                <div className="justify-content-center align-items-center text-center">
                  {/* Ícone dinâmico para estado de início ou conclusão */}
                  {module.completed ? (
                    <FaCheck className="text-success mb-2" size={20} />
                  ) : (
                    <FaPlay className="text-warning mb-2" size={18} />
                  )}
                </div>
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
                    variant="outlined"
                    color="secondary"
                    size="small"

                    sx={{
                      borderRadius: '24px',
                      width: '92px',
                      textTransform: 'none',
                      fontWeight:'bold',
                    }}
                    onClick={() => resetModuleProgress(module.id)}
                  >
                    Reiniciar
                  </Button>
                  <Button
                    variant={module.completed ? 'outlined' : 'contained'}
                    color="primary"
                    size="small"
                    sx={{
                      borderRadius: '24px',
                      width: '92px',
                      textTransform: 'none',
                      fontWeight:'bold',
                    }}
                    onClick={() =>
                      module.completed
                        ? handleReview(module.id)
                        : navigate(`/game/${module.id}`)
                    }
                  >
                    {module.completed ? 'Revisar' : 'Começar'}
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
          sx={{ borderRadius: '24px' }}
          onClick={() => navigate('/')}
        >
          Voltar à Home
        </Button>
      </Box>
    </div>
  );
}

export default Modules;
