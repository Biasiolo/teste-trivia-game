// src/pages/Review.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { Typography, Button } from '@mui/material';

function Review() {
  const { moduleId } = useParams();
  const navigate = useNavigate();

  const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
  const reviewData = savedReviews.find((r) => r.moduleId === parseInt(moduleId, 10));




  if (!reviewData) {
    return (
      <div className="container text-center py-5">
        <h2>Dados não encontrados</h2>
        <Button variant="secondary" onClick={() => navigate('/modules')}>
          Voltar aos Módulos
        </Button>
      </div>
    );
  }

  return (
    <div className="container mt-5 p-4 flex-column d-flex justify-content-center align-items-center text-center">
      <h1 className="display-4 fw-bold text-dark text-center mb-4">{reviewData.moduleName}</h1>
      <Typography variant="h5" color="#2afd00" fontWeight="bold">
        <h2 className="text-center mb-4 fw-bold">Nota: {reviewData.score}%</h2>
      </Typography>


      <h3 className="mt-4 text-info">Gabarito</h3>
      <Table striped borderless hover responsive className="mt-3 table-success fs-6 justify-content-center align-items-center">
        <thead className="table-primary">
          <tr>
            <th>#</th>
            <th>Pergunta</th>
            <th>Resposta Correta</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody>
          {reviewData.answeredQuestions.map((q, index) => (
            <tr key={q.id}>
              <td>{index + 1}</td>
              <td>{q.question}</td>

              <td>{q.answers[q.correct]}</td>
              <td className={q.isCorrect ? 'text-success' : 'text-danger'}>
                {q.isCorrect ? 'Correto' : 'Errado'}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="text-center my-4">
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: '24px' }}
          onClick={() => navigate('/modules')}
        >
          Voltar aos Módulos
        </Button>
      </div>
    </div>
  );
}

export default Review;
