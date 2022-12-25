import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { AppBlended } from './components/Blended/AppBlended';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <>
        {/* <App /> */}
        <AppBlended />
      </>
    </ThemeProvider>
  </React.StrictMode>
);
