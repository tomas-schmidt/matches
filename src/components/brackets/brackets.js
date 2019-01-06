import React, { Component } from 'react';
import './brackets.css'
import Bracket from './components/bracket/bracket'
import BracketMatch from './components/bracket-match/bracket-match';

class Brackets extends Component {

  render() {
    return (
      <div className="brackets-container">
        <Bracket id={1} bracket={this.props.brackets.one}></Bracket>
        <BracketMatch isFinal={true} match={this.props.brackets.final[0]}></BracketMatch>
        <Bracket id={2} bracket={this.props.brackets.two}></Bracket>
      </div>
    );
  }
}

export default Brackets;
