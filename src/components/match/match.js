import React, { Component } from 'react';
import './match.css';

class Match extends Component {
  render() {
    return (
      <div className="match-container">
        <span>{ this.props.match.time }</span>
        <span>{ this.props.match.homeTeam }</span>
        <img src={  this.props.match.homeTeamLogo }/>
        <span>{ this.props.match.visitingTeam }</span>
        <img src={ this.props.match.visitingTeamLogo }/>
      </div>
    );
  }
}

export default Match;
