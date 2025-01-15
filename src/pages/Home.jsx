// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='container d-flex justify-content-center text-center align-items-center'>
        <div className="flex flex-col items-center justify-center text-center h-screen bg-blue-100">
      <h1 className="text-4xl font-bold text-gray-800">Bem-vindo ao BrainDex</h1>
      <p className="text-xl mt-4 text-gray-600">Escolha sua trilha de conhecimento e comece a jogar!</p>
      <Link
        to="/game"
        className="mt-6 px-6 py-3 bg-blue-500 text-dark border border rounded font-semibold rounded-lg hover:bg-blue-600"
      >
        Iniciar Trilha de Geografia
      </Link>
    </div> 

    </div>
  );
}

export default Home;
