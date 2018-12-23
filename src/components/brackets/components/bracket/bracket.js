import React, { Component } from 'react';
import './bracket.css'

class Bracket extends Component {
  render() {
    let bracketDisplay = this.props.id === 1? 'bracket-one' : 'bracket-two';
    return (
      <div className={bracketDisplay}>
          
      </div>
    );
  }
}

export default Bracket;
