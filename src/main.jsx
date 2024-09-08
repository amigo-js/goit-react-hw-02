import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App';
// import "./index.css";
import '/node_modules/modern-normalize/modern-normalize.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
