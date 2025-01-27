// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import { Box, Typography, Button, Stack } from '@mui/material';

function CardModal({ card, onClose, onAnswer }) {
  const [selected, setSelected] = useState(null);

  const handleSubmit = () => {
    const isCorrect = selected === card.correct;
    onAnswer(isCorrect);
  };

  return (
    <Modal show onHide={onClose} centered size="lg">
      <Modal.Header closeButton className="modal-head">
        <Typography variant="h5" component="div" className="fw-bold text-info">
          {`Pergunta ${card.id}`}
        </Typography>
      </Modal.Header>

      <Modal.Body className="body-card text-center">
        <Box className="mb-4">
          <Typography variant="body1" color="textSecondary" className="mb-2">
            {card.concept}
          </Typography>

          {/* Renderizando as linhas da pergunta */}
          {Array.isArray(card.question) ? (
            card.question.map((line, index) => (
              <Typography
                key={index}
                variant="body1"
                fontWeight={index === 0 ? 'bold' : 'normal'}
                color="textPrimary"
                gutterBottom
              >
                {line}
              </Typography>
            ))
          ) : (
            <Typography variant="h6" fontWeight="bold" color="textPrimary">
              {card.question}
            </Typography>
          )}
        </Box>

        <Stack spacing={2} className="mt-3 text-dark">
          {card.answers.map((answer, index) => (
            <Button
            className="resposta"
              key={index}
              variant={selected === index ? 'contained' : 'outlined'}
              color="primary"
              size="large"
              onClick={() => setSelected(index)}
              sx={{
                textTransform: 'none',
                fontWeight: 'bold',
              }}
            >
              {answer}
            </Button>
          ))}
        </Stack>
      </Modal.Body>

      <Modal.Footer className="modal-foot">
        <Box className="d-flex justify-content-between w-100">
          <Button
            variant="contained"
            color="error"
            size="large"
            onClick={onClose}
            sx={{ textTransform: 'none' }}
          >
            Fechar
          </Button>

          <Button
            variant="contained"
            color="success"
            size="large"
            onClick={handleSubmit}
            disabled={selected === null}
            sx={{ textTransform: 'none', fontWeight: 'bold' }}
          >
            Responder
          </Button>
        </Box>
      </Modal.Footer>
    </Modal>
  );
}

// Adicionando validação de props
CardModal.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    concept: PropTypes.string.isRequired, // Adicionado conceito
    question: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
    answers: PropTypes.arrayOf(PropTypes.string).isRequired,
    correct: PropTypes.number.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onAnswer: PropTypes.func.isRequired,
};

export default CardModal;
