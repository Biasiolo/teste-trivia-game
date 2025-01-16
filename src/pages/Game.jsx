// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Container, Row, Col, ProgressBar, Button } from 'react-bootstrap';
import Narrative from '../components/Narrative';
import CardDeck from '../components/CardDeck';
import VideoLesson from '../components/VideoLesson'; // Importa o componente de vídeo
import questions from '../data/questions'; // Importa as questões

function Game() {
  const totalCards = questions.length; // Total inicial de cartas
  const [progress, setProgress] = useState(0); // Progresso da trilha
  const [message, setMessage] = useState('Bem-vindo à trilha de Geologia! Assista a vídeo aula e clique em um card de questões.');
  const [motivation, setMotivation] = useState('Vamos começar!');
  const [cards, setCards] = useState(questions); // Usa as questões importadas
  const [correctAnswers, setCorrectAnswers] = useState(0); // Contador de acertos
  const [wrongAnswers, setWrongAnswers] = useState(0); // Contador de erros

  const handleAnswer = (id, isCorrect) => {
    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1); // Incrementa acertos
      setMessage('Resposta correta! Você está avançando na trilha!');
      setMotivation('Excelente trabalho! Continue avançando!');
      setProgress((prevProgress) => prevProgress + 100 / totalCards); // Atualiza progresso com base no total inicial
    } else {
      setWrongAnswers((prev) => prev + 1); // Incrementa erros
      setMessage('Resposta errada. Reflita sobre o conceito e tente novamente.');
      setMotivation('Não desista! Você consegue superar esse desafio!');
    }

    // Remove o card respondido
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  const resetGame = () => {
    setProgress(0);
    setMessage('Bem-vindo à trilha de Geologia! Clique em um card para começar.');
    setMotivation('Você está indo muito bem! Continue assim!');
    setCards(questions);
    setCorrectAnswers(0);
    setWrongAnswers(0);
  };

  return (
    <Container fluid className="d-flex flex-column vh-100">
      <Row className="flex-grow-1 mt-4">
        <Col className="d-flex flex-column justify-content-center align-items-center">
          {cards.length > 0 ? (
            <>
              <Narrative message={message} />
              <VideoLesson videoUrl="https://www.youtube.com/embed/lX_NDtrBPn8" /> {/* Adiciona o vídeo */}
              <p className="text-success mt-3">{motivation}</p> {/* Mensagem motivacional */}
              <ProgressBar now={progress} label={`${Math.round(progress)}%`} className="w-75 my-2" />
            </>
          ) : (
            <div className="text-center">
              <h2>Parabéns! Você completou a trilha!</h2>
              <p className="mt-3">Resultados:</p>
              <p className="text-success">Acertos: {correctAnswers}</p>
              <p className="text-danger">Erros: {wrongAnswers}</p>
              <Button variant="primary" onClick={resetGame} className="mt-3">
                Jogar Novamente
              </Button>
            </div>
          )}
        </Col>
      </Row>
      {cards.length > 0 && (
        <Row className="bg-light border-top my-4">
          <Col>
            <CardDeck cards={cards} onAnswer={handleAnswer} />
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Game;
