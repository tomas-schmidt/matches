import React, { Component } from 'react';
import './home.css'
import Matches from '../../matches/matches'

class Home extends Component {

  render() {
    let matchesTest = [ 
      {
        "id": 0,
        "homeTeam": "Team1 Team1",
        "visitingTeam": "Team2 Team2",
        "homeTeamLogo": "../favicon.ico",
        "visitingTeamLogo": "../favicon.ico",
        "time": "17:30",
        "day": "Hoy",
        "instance": "8vos",
        "competition": "Libertadores"
      },
      {
        "id": 1,
        "homeTeam": "Team1 Team1",
        "visitingTeam": "Team2 Team2",
        "homeTeamLogo": "../favicon.ico",
        "visitingTeamLogo": "../favicon.ico",
        "time": "17:30",
        "day": "17/05",
        "instance": "8vos",
        "competition": "Sudamericana"
      },
      {
        "id": 2,
        "homeTeam": "Team1 Team1",
        "visitingTeam": "Team2 Team2",
        "homeTeamLogo": "../favicon.ico",
        "visitingTeamLogo": "../favicon.ico",
        "time": "17:30",
        "day": "17/05",
        "instance": "8vos",
        "competition": "Superliga"
      }
    ]
    return (
      <div className="home-container">
        <span>Hoy</span>
        <Matches matches={matchesTest}></Matches>
        <span>Esta semana</span>
        <Matches matches={matchesTest}></Matches>
      </div>
    );
  }
}

export default Home;
