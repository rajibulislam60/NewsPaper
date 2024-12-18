import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';


const rootElement = document.getElementById('root');

if (process.env.NODE_ENV !== "development") {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} else {
  createRoot(rootElement).render(<App />);
}


console.log(import.meta.env.VITE_TEST_NEWS_URL, import.meta.env.VITE_TEST_NEWS_API_KEY);
