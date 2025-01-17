// src/pages/Game.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ProgressBar, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import Narrative from '../components/Narrative';
import CardDeck from '../components/CardDeck';
import VideoLesson from '../components/VideoLesson';
import modules from '../data/modules';
import questions from '../data/questions';

function Game() {
  const { moduleId } = useParams(); // Captura o ID do módulo da URL
  const navigate = useNavigate();
  const module = modules.find((mod) => mod.id === parseInt(moduleId, 10)); // Encontra o módulo correspondente
  const totalCards = questions.length; // Número total de questões
  const [progress, setProgress] = useState(0);
  const [cards, setCards] = useState(questions);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    if (!module) {
      navigate('/modules'); // Redireciona se o módulo não for encontrado
    }
  }, [module, navigate]);

  const handleAnswer = (id, isCorrect) => {
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

    // Simula persistência em localStorage
    const updatedModules = modules.map((mod) =>
      mod.id === module.id ? module : mod
    );
    localStorage.setItem('modules', JSON.stringify(updatedModules));

    navigate('/modules');
  };

  return (
    <Container fluid className="d-flex flex-column vh-100">
      <Row className="flex-grow-1 mt-4">
        <Col className="d-flex flex-column justify-content-center align-items-center">
          {cards.length > 0 ? (
            <>
              <Narrative message={`Bem-vindo à trilha ${module?.name || ''}!`} />
              <VideoLesson videoUrl="https://www.youtube.com/embed/lX_NDtrBPn8" />
              <ProgressBar now={progress} label={`${Math.round(progress)}%`} className="w-75 my-2" />
            </>
          ) : (
            <div className="text-center">
              <h2>Módulo Concluído!</h2>
              <p>Nota: {Math.round((correctAnswers / totalCards) * 100)}%</p>
              <Button variant="primary" onClick={updateModuleProgress}>
                Voltar aos Módulos
              </Button>
            </div>
          )}
        </Col>
      </Row>
      {cards.length > 0 && (
        <Row>
          <Col>
            <CardDeck cards={cards} onAnswer={handleAnswer} />
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Game;
