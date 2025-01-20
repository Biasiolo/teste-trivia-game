// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

function CardModal({ card, onClose, onAnswer }) {
  const [selected, setSelected] = useState(null);

  const handleSubmit = () => {
    const isCorrect = selected === card.correct;
    onAnswer(isCorrect);
  };

  return (
    <Modal show onHide={onClose} centered size="lg">
      <Modal.Header closeButton className="bg-success-subtle bg-gradient">
        <Modal.Title >{`Pergunta ${card.id}`}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="body-card text-white text-center">
        <p className=" fs-5">{card.concept}</p> {/* Exibe o conceito */}
        <p className="fw-bold fs-4">{card.question}</p>
        <div className="d-flex flex-column">
          {card.answers.map((answer, index) => (
            <Button
            key={index}
            variant={selected === index ? 'info' : 'outline-info'}
            className={`mb-2 fs-5 fw-bold text-light ${
              selected === index ? 'button-selected' : 'button-hover-dark'
            }`}
            onClick={() => setSelected(index)}
          >
            {answer}
          </Button>
          
          
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer className="bg-success-subtle bg-gradient">
        <Button variant="secondary" onClick={onClose}>
          Fechar
        </Button>
        <Button
          variant="success"
          onClick={handleSubmit}
          disabled={selected === null}
        >
          Responder
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

// Adicionando validação de props
CardModal.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    concept: PropTypes.string.isRequired, // Adicionado conceito
    question: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.string).isRequired,
    correct: PropTypes.number.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onAnswer: PropTypes.func.isRequired,
};

export default CardModal;
