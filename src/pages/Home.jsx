// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import QuestionCard from '../components/QuestionCard';

const API_URL = 'https://opentdb.com/api.php?amount=20&category=22';

function Home() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      // Verificar cache local
      const cachedQuestions = localStorage.getItem('triviaQuestions');
      if (cachedQuestions) {
        setQuestions(JSON.parse(cachedQuestions));
        setLoading(false);
        return;
      }

      // Fazer requisição à API
      const response = await fetch(API_URL);
      if (!response.ok) {
        if (response.status === 429) {
          throw new Error('Too many requests. Please try again later.');
        }
        throw new Error('Failed to fetch questions.');
      }

      const data = await response.json();
      localStorage.setItem('triviaQuestions', JSON.stringify(data.results)); // Salvar no cache
      setQuestions(data.results);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!questions || questions.length === 0) return <p>No questions available. Please try again later.</p>;

  return (
    <div>
      {questions.map((question, index) => (
        <QuestionCard key={index} question={question} />
      ))}
    </div>
  );
}

export default Home;
