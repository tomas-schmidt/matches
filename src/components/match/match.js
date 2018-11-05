import React, { Component } from 'react';
import './match.css';

class Match extends Component {
  render() {
    let competition;
    if (this.props.competition) competition = <span>{  this.props.competition }</span>
    return (
      <div className="container">
        <div className="match-container">
          <span>{ this.props.match.time }</span>
          <span>{ this.props.match.homeTeam }</span>
          <img className="team-logo" src={  this.props.match.homeTeamLogo }/>
          <img className="team-logo" src={ this.props.match.visitingTeamLogo }/>
          <span>{ this.props.match.visitingTeam }</span>        
        </div>
        { competition }
      </div>
    );
  }
}

export default Match;
