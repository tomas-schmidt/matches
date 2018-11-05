import React, { Component } from 'react';
import './home.css'
import Match from '../../match/match'

class Home extends Component {

  render() {
    let matchesTest = [ 
      {
        "id": 0,
        "homeTeam": "Team1 Team1",
        "visitingTeam": "Team2 Team2",
        "homeTeamLogo": "../favicon.ico",
        "visitingTeamLogo": "../favicon.ico",
        "time": "17:30"
      },
      {
        "id": 1,
        "homeTeam": "Team1 Team1",
        "visitingTeam": "Team2 Team2",
        "homeTeamLogo": "../favicon.ico",
        "visitingTeamLogo": "../favicon.ico",
        "time": "17:30"
      },
      {
        "id": 2,
        "homeTeam": "Team1 Team1",
        "visitingTeam": "Team2 Team2",
        "homeTeamLogo": "../favicon.ico",
        "visitingTeamLogo": "../favicon.ico",
        "time": "17:30",
        "competition": "Superliga"
      }
    ]
    return (
      <div className="home-container">
        { matchesTest.map(match => <Match competition={match.competition} key={ match.id } match={ match }></Match>) }
      </div>
    );
  }
}

export default Home;
