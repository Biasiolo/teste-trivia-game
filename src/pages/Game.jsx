// src/pages/Game.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ProgressBar, Table } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import Narrative from '../components/Narrative';
import CardDeck from '../components/CardDeck';
import VideoLesson from '../components/VideoLesson';
import modules from '../data/modules'; // Importa os módulos

const MODULES_VERSION = '1.0'; // Versão atual dos módulos

function Game() {
  const { moduleId } = useParams(); // Captura o ID do módulo da URL
  const navigate = useNavigate();
  const module = modules.find((mod) => mod.id === parseInt(moduleId, 10)); // Encontra o módulo correspondente
  const totalCards = module?.questions.length || 0; // Total de questões no módulo
  const [progress, setProgress] = useState(0);
  const [cards, setCards] = useState(module?.questions || []); // Perguntas do módulo
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]); // Para armazenar respostas e gabarito

  useEffect(() => {
    const savedVersion = localStorage.getItem('modulesVersion');
    const savedModules = JSON.parse(localStorage.getItem('modules')) || [];

    if (savedVersion !== MODULES_VERSION) {
      const updatedModules = modules.map((module) => {
        const existingModule = savedModules.find((m) => m.id === module.id);
        return existingModule
          ? { ...module, ...existingModule }
          : { ...module, completed: false, score: 0 };
      });

      localStorage.setItem('modules', JSON.stringify(updatedModules));
      localStorage.setItem('modulesVersion', MODULES_VERSION);
    }
    if (!module) {
      navigate('/modules');
    }
  }, [module, navigate]);

  const handleAnswer = (id, isCorrect) => {
    const answeredCard = cards.find((card) => card.id === id);

    // Armazena a questão respondida
    setAnsweredQuestions((prev) => [
      ...prev,
      {
        ...answeredCard,
        isCorrect,
        userAnswer: answeredCard.answers[isCorrect ? answeredCard.correct : null],
      },
    ]);

    // Incrementa a pontuação correta, se acertar
    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
    }

    // Atualiza o progresso com base no total de questões
    setProgress((prevProgress) => prevProgress + 100 / totalCards);

    // Remove a questão respondida
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  const updateModuleProgress = () => {
    const score = Math.round((correctAnswers / totalCards) * 100);
    module.completed = true;
    module.score = score;

    // Salva o gabarito no localStorage
    const reviewData = {
      moduleId: module.id,
      moduleName: module.name,
      score,
      answeredQuestions,
    };
    const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    const updatedReviews = [
      ...savedReviews.filter((r) => r.moduleId !== module.id),
      reviewData,
    ];
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));

    // Atualiza o progresso do módulo
    const updatedModules = modules.map((mod) =>
      mod.id === module.id ? module : mod
    );
    localStorage.setItem('modules', JSON.stringify(updatedModules));

    navigate('/modules');
  };

  return (
    <Container fluid className="d-flex flex-column bg-transparent px-4 vh-100">
      <Row className="flex-grow-1 mt-3">
        <Col className="d-flex flex-column justify-content-center align-items-center">
          {cards.length > 0 ? (
            <>
              <Narrative
                messages={[
                  `Bem-vindo à trilha ${module?.name || ''}!`,
                  'Assista à videoaula para começar.',
                  'Responda aos cards e obtenha sua pontuação.',
                  'Revise sua performance na página de módulos.',
                  'Tudo pronto?',
                  'Boa sorte!',
                ]}
              />
              <VideoLesson
                videoUrl={module?.videoUrl || ''}
                moduleName={module?.name || ''}
              />
              <Box className="w-50 mb-4">
                <ProgressBar
                  now={progress}
                  label={`${Math.round(progress)}%`}
                  className="border border-success"
                />
              </Box>
            </>
          ) : (
            <Box textAlign="center" className="mt-4">
              <Typography variant="h4" fontWeight="bold" color="textPrimary">
                Módulo Concluído!
              </Typography>
              <Typography variant="h5" color="#2afd00" fontWeight="bold">
                Acertos: {correctAnswers}
              </Typography>
              <Typography variant="h6" color="#b9fc00" fontWeight="bold">
                Erros: {totalCards - correctAnswers}
              </Typography>
              <Typography variant="h5" className="mt-4" color="textSecondary">
                Gabarito
              </Typography>
              <Table
                striped
                borderless
                hover
                responsive
                className="mt-3 table-success fs-6"
              >
                <thead className="table-primary">
                  <tr>
                    <th>#</th>
                    <th>Pergunta</th>
                    <th>Resposta Correta</th>
                    <th>Resultado</th>
                  </tr>
                </thead>
                <tbody>
                  {answeredQuestions.map((q, index) => (
                    <tr key={q.id}>
                      <td>{index + 1}</td>
                      <td>{q.question}</td>
                      <td>{q.answers[q.correct]}</td>
                      <td
                        className={q.isCorrect ? 'text-success' : 'text-danger'}
                      >
                        {q.isCorrect ? 'Correto' : 'Errado'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className="my-4"
                sx={{ borderRadius: '24px' }}
                onClick={updateModuleProgress}
              >
                Voltar aos Módulos
              </Button>
            </Box>
          )}
        </Col>
      </Row>
      {cards.length > 0 && (
        <Row className="mb-3 bg-transparent bg-gradient">
          <Col className="deck3 rounded">
            <CardDeck cards={cards} onAnswer={handleAnswer} />
          </Col>
          <Box textAlign="center" className="my-4">
            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: '24px' }}
              onClick={() => navigate('/modules')}
            >
              Voltar aos Módulos
            </Button>
          </Box>
        </Row>
      )}
    </Container>
  );
}

export default Game;
