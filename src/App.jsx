// import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { RouterManager } from './routes/RouterManager';

// Estilos globais para a barra de rolagem
const GlobalStyle = createGlobalStyle`
  /* Estilo para navegadores WebKit (Chrome, Safari) */
  ::-webkit-scrollbar {
    width: 4px; /* Largura da barra de rolagem */
  }

  ::-webkit-scrollbar-track {
    background: #f0f0f0; /* Cor de fundo da trilha */
  }

  ::-webkit-scrollbar-thumb {
    background: #888; /* Cor do "thumb" (a parte que você arrasta) */
    border-radius: 2px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555; /* Cor do thumb ao passar o mouse */
  }

  /* Estilo para Firefox */
  * {
    scrollbar-width: thin; /* Largura da barra de rolagem */
    scrollbar-color: #888 #f0f0f0; /* Cor do thumb e da trilha */
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterManager />
    </>
  );
}

export default App;
