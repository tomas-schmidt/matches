import React, { Component } from 'react';
import './libertadores.css'
import Matches from '../../matches/matches';
import axios from 'axios'
import environment from '../../../environments/environment';

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
    axios.get(`${environment.apiBaseUrl}/libertadores`).then(res => { console.log(res); })
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
