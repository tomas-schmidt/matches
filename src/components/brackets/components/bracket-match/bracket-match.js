import React, { Component } from 'react';
import './bracket-match.css'

class BracketMatch extends Component {
  render() {
    if (!this.props.match) return null;
    let matchStyles = this.props.isFinal ? 'bracket-final' : '';
    return (
      <div className={`bracket-match ${matchStyles}`}>
        <span className="bracket-team">{this.props.match.team1}</span>
        <span className="bracket-team">{this.props.match.team2}</span>
      </div>
    );
  }
}

export default BracketMatch;
