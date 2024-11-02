import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './App.css'
import { Provider } from 'react-redux';
import { store } from './ReduxToolkit/Store.js';

store.subscribe(()=>console.log(store.getState()))
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
