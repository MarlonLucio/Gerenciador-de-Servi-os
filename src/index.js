import React from 'react'; // Importa React
import { createRoot } from 'react-dom/client'; // Importa createRoot de ReactDOM
import App from './App'; // Importa o componente App
import './styles.css'; // Importa o arquivo de estilos

// Encontra o elemento root no HTML
const rootElement = document.getElementById('root');
// Cria a raiz do React e renderiza o componente App
const root = createRoot(rootElement);
root.render(<App />);
