import React, { Component } from 'react';
import './bracket.css'
import BracketMatch from '../bracket-match/bracket-match';

class Bracket extends Component {
  render() {
    if (!this.props.bracket) return null;
    let bracketDisplay = this.props.id === 1? 'bracket-one' : 'bracket-two';
    return (
      <div className={`bracket ${bracketDisplay}`}>
        <div className="series">
          {this.props.bracket.slice(0,4).map(match => <BracketMatch key={match.instance + match.instanceDetail} match={match}></BracketMatch>)}
        </div>
        <div className="series">
          {this.props.bracket.slice(4,6).map(match => <BracketMatch key={match.instance + match.instanceDetail} match={match}></BracketMatch>)}
        </div>
        <div className="series">
          {this.props.bracket.slice(6,7).map(match => <BracketMatch key={match.instance + match.instanceDetail} match={match}></BracketMatch>)}
        </div>
      </div>
    );
  }
}

export default Bracket;
