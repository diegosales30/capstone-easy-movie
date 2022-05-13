import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Theme from './styles/global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ChakraProvider theme={Theme}>
          <App />
      </ChakraProvider>
    </React.StrictMode>
  </BrowserRouter>
);

