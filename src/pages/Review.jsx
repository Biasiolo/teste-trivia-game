// src/pages/Review.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';

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
    <div className="container p-4 flex-column d-flex justify-content-center align-items-center text-center">
      <h1 className="display-4 fw-bold text-primary text-center mb-4">{reviewData.moduleName}</h1>
      <h2 className="text-success text-center mb-4 fw-bold">Nota: {reviewData.score}%</h2>

      <h3 className="mt-4">Gabarito</h3>
      <Table striped borderless hover responsive  className="mt-3 table-success fs-6 justify-content-center">
                      <thead className="table-warning">
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

      <div className="text-center mt-4">
        <Button variant="success" onClick={() => navigate('/modules')}>
          Voltar aos Módulos
        </Button>
      </div>
    </div>
  );
}

export default Review;
