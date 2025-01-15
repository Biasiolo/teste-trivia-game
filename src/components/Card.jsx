// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Card({ card, onAnswer }) {
    const [selected, setSelected] = useState(null);

    // Resetar o estado `selected` sempre que a pergunta mudar
    useEffect(() => {
        setSelected(null);
    }, [card]);

    const handleAnswer = (index) => {
        setSelected(index);
        const isCorrect = index === card.correct;
        onAnswer(isCorrect);
    };

    return (
        <div className="p-4 bg-white shadow-lg rounded-md">
            <h3 className="text-lg font-bold">{card.question}</h3>
            <div className="mt-4 grid gap-2">
                {card.answers.map((answer, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        className={`px-4 py-2 rounded ${
                            selected === index
                                ? index === card.correct
                                    ? 'bg-green-500 text-white'
                                    : 'bg-red-500 text-white'
                                : 'bg-gray-100'
                        }`}
                    >
                        {answer}
                    </button>
                ))}
            </div>
        </div>
    );
}

Card.propTypes = {
    card: PropTypes.shape({
        question: PropTypes.string.isRequired,
        answers: PropTypes.arrayOf(PropTypes.string).isRequired,
        correct: PropTypes.number.isRequired,
    }).isRequired,
    onAnswer: PropTypes.func.isRequired,
};

export default Card;
