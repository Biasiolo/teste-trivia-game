// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

function Narrative({ message }) {
  return (
    <Alert variant="info" className="text-center">
      {message}
    </Alert>
  );
}

// Adicionando validação de props
Narrative.propTypes = {
  message: PropTypes.string.isRequired, // message deve ser uma string obrigatória
};

export default Narrative;
