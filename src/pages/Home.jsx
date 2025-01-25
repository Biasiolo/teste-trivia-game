// src/pages/Home.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

function Home() {
  const navigate = useNavigate(); // Hook para navegação

  return (
    <Box
      className="container d-flex justify-content-center align-items-center vh-100 bg-light-subtle bg-gradient"
      textAlign="center"
    >
      <Box>
        {/* Adiciona o logo acima do título */}
        <img
          src="/semfundo.png" /* Caminho do logo */
          alt="BrainDex Logo"
          className="mb-4"
          style={{ width: '250px', height: 'auto' }} /* Tamanho do logo */
        />
        <Typography
          variant="h3"
          component="h1"
          fontWeight="bold"
          color="textPrimary"
          gutterBottom
        >
          Bem-vindo ao BrainDex
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="textSecondary"
          className="mb-4"
        >
          Explore trilhas de conhecimento interativas e divirta-se aprendendo!
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/modules')}
          sx={{
            backgroundColor: '#6A0DAD', // Cor roxa
            color: '#fff', // Texto branco
            '&:hover': {
              backgroundColor: '#580A9E', // Tom mais escuro ao hover
            },
          }}
        >
          Explorar Trilha de Geografia
        </Button>
      </Box>
    </Box>
  );
}

export default Home;
