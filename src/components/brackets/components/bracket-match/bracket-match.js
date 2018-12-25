import React, { Component } from 'react';
import './bracket-match.css'

class BracketMatch extends Component {
  render() {
    if (!this.props.match) return null;
    return (
      <div>
        <span>{this.props.match.team1}</span>
        <span>{this.props.match.team2}</span>
      </div>
    );
  }
}

export default BracketMatch;
