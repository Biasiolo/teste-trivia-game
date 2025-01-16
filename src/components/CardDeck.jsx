// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import CardModal from './CardModal';

import PropTypes from 'prop-types';

function CardDeck({ cards, onAnswer }) {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className=" card-deck1 d-flex justify-content-center flex-wrap py-4 my-3">
      {cards.map((card) => (
        <Card
          key={card.id}
          className="m-2"
          style={{ width: '88px', height: '116px', cursor: 'pointer' }}
          onClick={() => setSelectedCard(card)}
        >
          <Card.Body className="d-flex align-items-center justify-content-center">
            <Card.Title>{`${card.id}`}</Card.Title>
          </Card.Body>
        </Card>
      ))}
      {selectedCard && (
        <CardModal
          card={selectedCard}
          onClose={() => setSelectedCard(null)}
          onAnswer={(isCorrect) => {
            onAnswer(selectedCard.id, isCorrect);
            setSelectedCard(null); // Fecha o modal
          }}
        />
      )}
    </div>
  );
}

// Adicionando validação de props
CardDeck.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      question: PropTypes.string.isRequired,
      answers: PropTypes.arrayOf(PropTypes.string).isRequired,
      correct: PropTypes.number.isRequired,
    })
  ).isRequired,
  onAnswer: PropTypes.func.isRequired,
};

export default CardDeck;

