import React from 'react';
import App from './App';
import './index.css';
import './assets/animations.css';
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <div className='contenair_app'>
        <div className='filtre_app'>
          <App />
        </div>
      </div>
    </React.StrictMode>
  );
} else {
  console.error("Élément root non trouvé dans le DOM !");
}