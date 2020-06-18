import React from 'react'
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import calcul from './reducers/calcul';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import {multiplication} from './utils';

const initialState={
  score:0,
    nombreQestion:0,
    result:'',
    equations: multiplication()
}
const store = createStore(calcul,initialState, composeWithDevTools());


render(
  // Contextualiser le sotre pour l'application
  <Provider store={store}>
  <App />
  </Provider>
  ,
  document.getElementById('root')
  );
  
