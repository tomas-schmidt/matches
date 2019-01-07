import React, { Component } from 'react';
import './match.css';

class Match extends Component {
  render() {
    let competition;
    if (this.props.match.competition) competition = <span>{  this.props.match.competition }</span>
    let homeLogo, visitingLogo;
    homeLogo = visitingLogo = require("./../../../../assets/unknown.png");
    // if (this.props.match.homeLogoTeam === null) homeLogo=require("./../../../../assets/unknown.png")
    // if (this.props.match.visitingLogoTeam === null) visitingLogo=require("./../../../../assets/unknown.png")
    return (
      <div className="container">
        <div className="match-container">
          <span className="day">{this.props.match.day}</span>
          <span className="time">{this.props.match.time}</span>
          <span className="team">{this.props.match.homeTeam}</span>
          <img className="team-logo" alt="home-logo" src={homeLogo}/>
          <img className="team-logo" alt="visiting-logo" src={visitingLogo}/>
          <span className="team">{this.props.match.visitingTeam}</span>
          <span>{this.props.match.instace}</span>
        </div>
        {competition}
      </div>
    );
  }
}

export default Match;
