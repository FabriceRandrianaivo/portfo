import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import { createRoot } from "react-dom/client";
// import { Provider } from 'react-redux';
// import store from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { store } from './store/store';


// ReactDOM.createRoot(document.getElementById('root')!).render(
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement); // Utilisation de createRoot
  root.render(
    <React.StrictMode>
      {/* <Provider store={store} > */}
      {/* <div className='contenair_app'>
        <div className='filtre_app'> */}
          <App />
        {/* </div>
      </div> */}
      {/* </Provider> */}
    </React.StrictMode>
  );
} else {
  console.error("Élément root non trouvé dans le DOM !");
}