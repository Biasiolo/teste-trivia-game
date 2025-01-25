// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import CardModal from './CardModal';

import PropTypes from 'prop-types';

function CardDeck({ cards, onAnswer }) {
  const [selectedCard, setSelectedCard] = useState(null);

  return (

      <div className="card-deck1 rounded d-flex flex-column align-items-center py-3 my-3">
      {/* Título centralizado acima dos cards */}
      <h3 className="text-center my-2 fw-bold deck-title">RESPONDA AOS CARDS ABAIXO</h3>
      <div className="d-flex justify-content-center pt-1 flex-wrap">
        {cards.map((card) => (
          <Card
            key={card.id}
            className="m-2 card1 p-1"

            onClick={() => setSelectedCard(card)}
          >
            <Card.Body className="d-flex align-items-center justify-content-center card-gradient">
              
            </Card.Body>
            <Card.Title className="text-center mt-2 deck-title2">{`${card.id}`}</Card.Title>
          </Card>
        ))}
      </div>
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
