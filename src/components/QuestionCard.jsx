// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function QuestionCard({ question }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const allAnswers = [
    ...question.incorrect_answers,
    question.correct_answer,
  ].sort(() => Math.random() - 0.5);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setShowAnswer(true);
  };

  return (
    <div className="question-card">
      <h3 dangerouslySetInnerHTML={{ __html: question.question }} />
      <div className="answers">
        {allAnswers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(answer)}
            className={`answer-button ${
              showAnswer
                ? answer === question.correct_answer
                  ? 'correct'
                  : selectedAnswer === answer
                  ? 'incorrect'
                  : ''
                : ''
            }`}
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        ))}
      </div>
      {showAnswer && (
        <p>
          {selectedAnswer === question.correct_answer
            ? 'Correct!'
            : 'Wrong answer!'}{' '}
          The correct answer is{' '}
          <strong dangerouslySetInnerHTML={{ __html: question.correct_answer }} />.
        </p>
      )}
    </div>
  );
}

// Validação de props
QuestionCard.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    correct_answer: PropTypes.string.isRequired,
    incorrect_answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default QuestionCard;
