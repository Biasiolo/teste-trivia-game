// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

function Narrative({ messages }) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showAlert, setShowAlert] = useState(true); // Controle para exibir o alerta
  const [fadeClass, setFadeClass] = useState('fade-in'); // Controle de transição

  useEffect(() => {
    if (currentMessageIndex < messages.length - 1) {
      const interval = setInterval(() => {
        // Troca para fade-out antes de mudar a mensagem
        setFadeClass('fade-out');
        setTimeout(() => {
          setCurrentMessageIndex((prevIndex) => prevIndex + 1);
          setFadeClass('fade-in'); // Volta para fade-in na nova mensagem
        }, 500); // Duração do fade-out
      }, 3600); // Tempo total por mensagem

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
        <Alert
          variant="transparent"
          className={`text-center text-light fs-5 mb-0 narrative-message ${fadeClass}`}
        >
          {messages[currentMessageIndex]}
        </Alert>
      ) : (
        <img src="/semfundo.png" alt="Logo" className="narrative-logo" />
      )}
    </div>
  );
}

// Adicionando validação de props
Narrative.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.string).isRequired, // messages deve ser um array de strings obrigatório
};

export default Narrative;
