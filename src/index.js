import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const divRoot = document.getElementById('myRoot');
const reactRoot = ReactDOM.createRoot(divRoot);
reactRoot.render(
  <StrictMode>¸
      <App />
  </StrictMode>
)

