// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import Narrative from '../components/Narrative';
import CardDeck from '../components/CardDeck';

function Game() {
  const [progress, setProgress] = useState(0); // Progresso da trilha
  const [message, setMessage] = useState('Bem-vindo à trilha de Geologia! Clique em um card para começar.'); // Mensagem do enredo
  const [cards, setCards] = useState([
    { id: 1, question: 'Qual é o maior tipo de rocha sedimentar?', answers: ['Calcário', 'Arenito', 'Xisto', 'Argilito'], correct: 0 },
    { id: 2, question: 'Qual mineral é o mais duro na escala de Mohs?', answers: ['Diamante', 'Quartzo', 'Topázio', 'Coríndon'], correct: 0 },
    { id: 3, question: 'Qual camada da Terra é líquida?', answers: ['Manto', 'Núcleo externo', 'Núcleo interno', 'Crosta'], correct: 1 },
    { id: 4, question: 'Como se chamam as rochas formadas por lava resfriada?', answers: ['Ígneas', 'Metamórficas', 'Sedimentares', 'Vulcânicas'], correct: 0 },
    { id: 5, question: 'Qual é o principal componente do granito?', answers: ['Feldspato', 'Mica', 'Calcário', 'Argila'], correct: 0 },
    // Adicione mais perguntas aqui
  ]);

  // Função para lidar com a resposta de um card
  const handleAnswer = (id, isCorrect) => {
    if (isCorrect) {
      setMessage('Resposta correta! Avance para o próximo desafio.');
      setProgress(progress + 10); // Avança no progresso
      setCards(cards.filter((card) => card.id !== id)); // Remove o card respondido corretamente
    } else {
      setMessage('Resposta errada! Tente novamente.');
    }
  };

  return (
    <Container fluid className="d-flex flex-column vh-100">
      <Row className="flex-grow-1">
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <Narrative message={message} />
          <ProgressBar now={progress} label={`${progress}%`} className="w-75 mt-3" />
        </Col>
      </Row>
      <Row className="bg-light border-top">
        <Col>
          <CardDeck cards={cards} onAnswer={handleAnswer} />
        </Col>
      </Row>
    </Container>
  );
}

export default Game;
