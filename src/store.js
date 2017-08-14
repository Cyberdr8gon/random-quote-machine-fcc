import { applyMiddleware, createStore, compose } from 'redux';

import {createLogger} from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

// utility functions
import {
  generateRelativeLuminanceColor, 
  generateShade, 
  generatePastel
} from './utility.js';




const initialState = {
  quote: "Quote Goes Here!",
  author: "Sam Bateman",
  textColor: "#383838",
  citeColor: "#999999",
  backgroundColor: "#000",
  fetching: false,
  error: null
};


const reducer = function(state=initialState, action) {
  
  switch(action.type) {
    case "FETCH_QUOTE_PENDING": {
      return Object.assign({}, state, {
        fetching: true,
      }) 
    }
    case "FETCH_QUOTE_FULFILLED": {
      return Object.assign({}, state, {
        fetching: false,
        quote: action.payload.data.quote,
        author: action.payload.data.author ? action.payload.data.author : "Unknown",
      }) 
    }
    case "FETCH_QUOTE_ERROR": {
      return Object.assign({}, state, {
        fetching: false,
        error: action.payload
      }) 
    }
    case "UPDATE_COLOR": {
      console.log(generatePastel);
      
      let color1 = generatePastel();
      let color2 = generateShade(color1, 3/4);
      let color3 = generateRelativeLuminanceColor(color1);

      return Object.assign({}, state, {
        textColor: color1.string,
        citeColor: color2.string,
        backgroundColor: "#FFF",
      }) 
    }

    default: {
      return state;
    }

  }

}

const middleware = applyMiddleware(promise(), thunk, createLogger());

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default createStore(reducer, composeEnhancers(middleware));




