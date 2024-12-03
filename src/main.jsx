import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import '@fontsource/roboto'; // Fuente de Material-UI
import { ThemeProvider } from '@mui/material/styles'; // Importa ThemeProvider
import theme from './theme'; // Importa tu tema personalizado

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
