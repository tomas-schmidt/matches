import React, { Component } from 'react';
import Match from '../../match/match'
import './libertadores.css'
import Matches from '../../matches/matches';

class Libertadores extends Component {
  constructor(props) {
    super(props);
    this.state = { matches: null }
  }

  getMatches() {
    this.state.matches = [ 
      {
        "id": 0,
        "homeTeam": "Team1 Team1",
        "visitingTeam": "Team2 Team2",
        "homeTeamLogo": "../favicon.ico",
        "visitingTeamLogo": "../favicon.ico",
        "time": "17:30",
        "day": "Hoy",
        "instance": "8vos"
      },
      {
        "id": 1,
        "homeTeam": "Team1 Team1",
        "visitingTeam": "Team2 Team2",
        "homeTeamLogo": "../favicon.ico",
        "visitingTeamLogo": "../favicon.ico",
        "time": "17:30",
        "day": "17/05",
        "instance": "8vos"
      },
      {
        "id": 2,
        "homeTeam": "Team1 Team1",
        "visitingTeam": "Team2 Team2",
        "homeTeamLogo": "../favicon.ico",
        "visitingTeamLogo": "../favicon.ico",
        "time": "17:30",
        "day": "17/05",
        "instance": "8vos"
      }
    ]
  }

  render() {
    this.getMatches();
    return (
      <div>
        <Matches matches={this.state.matches}></Matches>
      </div>
    );
  }
}

export default Libertadores;
