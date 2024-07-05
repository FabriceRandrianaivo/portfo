import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import { Provider } from 'react-redux';
// import store from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Provider store={store} > */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>
)
