import React from 'react';
import { connect } from 'react-redux';

class RandomQuote extends React.Component {
  render() {

    let blockStyle = {
      color: this.props.colors.textColor,
    };
    let citeStyle = {
      color: this.props.colors.citeColor,
    };

    return(
      <blockquote className="color-transition" style={blockStyle}>
        {this.props.quote.quote}
        <cite style={citeStyle}>{this.props.quote.author}</cite>
      </blockquote>
    )
  }
}


export default connect((store) => {
  return {
    colors: {
      textColor: store.textColor,
      citeColor: store.citeColor,
    },
    quote: {
      quote: store.quote,
      author: store.author,
    },
  }
})(RandomQuote);
