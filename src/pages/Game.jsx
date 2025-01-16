// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import Narrative from '../components/Narrative';
import CardDeck from '../components/CardDeck';
import questions from '../data/questions'; // Importa as questões

function Game() {
  const totalCards = questions.length; // Total inicial de cartas
  const [progress, setProgress] = useState(0); // Progresso da trilha
  const [message, setMessage] = useState('Bem-vindo à trilha de Geologia! Clique em um card para começar.');
  const [motivation, setMotivation] = useState('Você está indo muito bem! Continue assim!');
  const [cards, setCards] = useState(questions); // Usa as questões importadas

  const handleAnswer = (id, isCorrect) => {
    if (isCorrect) {
      setMessage('Resposta correta! Você está avançando na trilha!');
      setMotivation('Excelente trabalho! Continue avançando!');
      setProgress((prevProgress) => prevProgress + 100 / totalCards); // Atualiza progresso com base no total inicial

      // Remove o card respondido corretamente
      setCards((prevCards) => prevCards.filter((card) => card.id !== id));
    } else {
      setMessage('Resposta errada. Reflita sobre o conceito e tente novamente.');
      setMotivation('Não desista! Você consegue superar esse desafio!');
    }
  };

  return (
    <Container fluid className="d-flex flex-column vh-100">
      <Row className="flex-grow-1">
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <Narrative message={message} />
          <p className="text-success mt-3">{motivation}</p> {/* Mensagem motivacional */}
          <ProgressBar now={progress} label={`${Math.round(progress)}%`} className="w-75 my-4" />
        </Col>
      </Row>
      <Row className="bg-light border-top mb-4">
        <Col>
          <CardDeck cards={cards} onAnswer={handleAnswer} />
        </Col>
      </Row>
    </Container>
  );
}

export default Game;
