import React, { Component } from 'react';
import './bracket.css'
import BracketMatch from '../bracket-match/bracket-match';

class Bracket extends Component {
  render() {
    if (!this.props.bracket) return null;
    let bracketDisplay = this.props.id === 1? 'bracket-one' : 'bracket-two';
    return (
      <div className={`bracket ${bracketDisplay}`}>
        {this.props.bracket.map(match => <BracketMatch key={match.instance + match.instanceDetail} match={match}></BracketMatch>)}
      </div>
    );
  }
}

export default Bracket;
