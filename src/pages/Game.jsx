// src/pages/Game.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ProgressBar, Button, Table } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import Narrative from '../components/Narrative';
import CardDeck from '../components/CardDeck';
import VideoLesson from '../components/VideoLesson';
import modules from '../data/modules'; // Importa os módulos

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
    if (!module) {
      navigate('/modules'); // Redireciona se o módulo não for encontrado
    }
  }, [module, navigate]);

  const handleAnswer = (id, isCorrect) => {
    const answeredCard = cards.find((card) => card.id === id);

    // Armazena a questão respondida
    setAnsweredQuestions((prev) => [
      ...prev,
      { ...answeredCard, isCorrect, userAnswer: answeredCard.answers[isCorrect ? answeredCard.correct : null] },
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
    <Container fluid className="d-flex flex-column bg-success-subtle bg-gradient  vh-100">
      <Row className="flex-grow-1 mt-3 ">
        <Col className="d-flex flex-column  justify-content-center align-items-center">
          {cards.length > 0 ? (
            <>
              <Narrative message={`Bem-vindo à trilha ${module?.name || ''}!`} />
              <VideoLesson videoUrl={module?.videoUrl || ''} />
              <ProgressBar now={progress} label={`${Math.round(progress)}%`} className="w-50 mb-4 border border-success" />
            </>
          ) : (
            <div className="text-center">
              <h2 className="mb-3">Módulo Concluído!</h2>
              <p className="text-success fw-bold">
                Acertos: {correctAnswers}/{totalCards}
              </p>
              <p className="text-danger fw-bold">
                Erros: {totalCards - correctAnswers}
              </p>

              {/* Gabarito */}
              <h3 className="mt-4">Gabarito</h3>
              <Table striped bordered hover responsive className="mt-3">
                <thead>
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
                      <td className={q.isCorrect ? 'text-success' : 'text-danger'}>
                        {q.isCorrect ? 'Correto' : 'Errado'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              <Button variant="success" className="mt-4" onClick={updateModuleProgress}>
                Voltar aos Módulos
              </Button>
            </div>
          )}
        </Col>
      </Row>
      {cards.length > 0 && (
        <Row className='mb-3 bg-success-subtle bg-gradient ' >
          <Col className='bg-dark rounded' >
            <CardDeck cards={cards} onAnswer={handleAnswer} />
          </Col>
          <div className='justify-content-center text-center my-2 ' >
          <Button variant="secondary" onClick={() => navigate('/modules')}>
                    Voltar aos Módulos
                  </Button>
          </div>
        </Row>
      )}
    </Container>
  );
}

export default Game;
