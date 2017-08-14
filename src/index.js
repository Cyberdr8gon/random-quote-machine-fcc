import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';

import Store from './store';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let axiosQuoteService = axios.create({
  baseURL: "https://andruxnet-random-famous-quotes.p.mashape.com/",
  headers: {
    'X-Mashape-Key': "vZ0QX1TAqxmshtqaIi2AVdUMT63ip1mt4B9jsnE2U4dIHpIwyD",
    'Content-Type': "application/x-www-form-urlencoded",
    'Accept': "application/json"
  }
});

const getNewQuote = () => {
  Store.dispatch({
    type: "FETCH_QUOTE",
    payload: axiosQuoteService.post("/"),
  });
  Store.dispatch({
    type: "UPDATE_COLOR"
  });
};

getNewQuote();

ReactDOM.render(
  <Provider store={Store}>
    <App getNewQuote={getNewQuote} />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
