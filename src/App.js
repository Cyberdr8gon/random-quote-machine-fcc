import React, { Component } from 'react';
import {connect} from 'react-redux';
import thunk from "redux-thunk";

// css
import './App.css';

// components
import RandomQuote from './components/RandomQuote.js';



// app class

class App extends Component {
  render() {

    let appGeneratedStyles = {
      backgroundColor: this.props.backgroundColor,
    };
    let quoteBoxStyles = {
      backgroundColor: "#FFFFFF",
    };

    let twitterURI = 'https://twitter.com/intent/tweet?hashtags=freecodecamp&text=' 
      + encodeURIComponent('"' + this.props.quote.quote 
                        + '" ' + this.props.quote.author);

    return (
      <div className="App background-transition" style={appGeneratedStyles}>
        <div className="Quote-Box" style={quoteBoxStyles}>
          <RandomQuote/>
          <div className="interactions">
            <button className="background-transition" onClick={this.props.getNewQuote} style={ appGeneratedStyles }>New Quote</button>
            <a href={twitterURI} className="small-interaction-button background-transition" style={appGeneratedStyles}>Tweet</a>
          </div>
        </div>
      </div>
    );
  }
}

export default connect((store) => {
  return {
    backgroundColor: store.textColor,
    quote: {
      quote: store.quote,
      author: store.author,
    },
  }
})(App);
