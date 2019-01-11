import React, { Component } from 'react';
import './bracket-match.scss'

class BracketMatch extends Component {
  render() {
    if (!this.props.match) return null;
    let matchStyles = this.props.isFinal ? 'bracket-final' : '';
    return (
      <div className={`bracket-match ${matchStyles}`}>
        <div className="bracket-team">
          <img className="bracket-team-logo" alt="home-logo" src={require("./../../../../../assets/unknown.png")}/>
          <span>{this.props.match.team1}</span>
        </div>
        <div className="bracket-team">
          <img className="bracket-team-logo" alt="home-logo" src={require("./../../../../../assets/unknown.png")}/>
          <span>{this.props.match.team2}</span>
        </div>
      </div>
    );
  }
}

export default BracketMatch;
