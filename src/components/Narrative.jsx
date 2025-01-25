// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

function Narrative({ messages }) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showAlert, setShowAlert] = useState(true); // Controle para exibir o alerta

  useEffect(() => {
    if (currentMessageIndex < messages.length - 1) {
      const interval = setInterval(() => {
        setCurrentMessageIndex((prevIndex) => prevIndex + 1);
      }, 3500); // Alterna a cada 4 segundos

      return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    } else {
      // Remove o alerta após 4 segundos da última mensagem
      const timeout = setTimeout(() => setShowAlert(false), 4000);
      return () => clearTimeout(timeout);
    }
  }, [currentMessageIndex, messages.length]);

  return (
    <div className="narrative-container">
      {showAlert ? (
        <Alert variant="transparent" className="text-center text-light fs-5">
          {currentMessageIndex === messages.length - 1 ? (
            <p>{messages[currentMessageIndex]}</p>
          ) : (
            messages[currentMessageIndex]
          )}
        </Alert>
      ) : (
        <img
          src="/semfundo.png"
          alt="Logo"
          className="narrative-logo"
        />
      )}
    </div>
  );
}

// Adicionando validação de props
Narrative.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.string).isRequired, // messages deve ser um array de strings obrigatório
};

export default Narrative;
