
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar'
import Match from './components/match/match';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCategory: 0,
    };
    this.handleFieldChange = this.handleFieldChange.bind(this);
  };

  handleFieldChange(cat) {
    this.setState({ currentCategory: cat });
  }

  render() {
    let text = this.state.currentCategory == 0 ? 'Hoy'
      : this.state.currentCategory == 1 ? 'Libertadores' 
      : this.state.currentCategory == 2 ? 'Sudamericana' 
      : this.state.currentCategory == 3 ? 'Superliga' 
      : this.state.currentCategory == 4 ? 'Copa Argentina' : '' ;
    let matchesTest = [ 
      {
        "id": 0,
        "homeTeam": "Team1 Team1",
        "visitingTeam": "Team2 Team2",
        "homeTeamLogo": "../../logo.svg",
        "visitingTeamLogo": "../../logo.svg",
        "time": "17:30"
      },
      {
        "id": 1,
        "homeTeam": "Team1 Team1",
        "visitingTeam": "Team2 Team2",
        "homeTeamLogo": "../../logo.svg",
        "visitingTeamLogo": "../../logo.svg",
        "time": "17:30"
      },
      {
        "id": 2,
        "homeTeam": "Team1 Team1",
        "visitingTeam": "Team2 Team2",
        "homeTeamLogo": "../../logo.svg",
        "visitingTeamLogo": "../../logo.svg",
        "time": "17:30"
      }
    ]
    return (
      <div className="App">
        <Navbar onChange={this.handleFieldChange}></Navbar>
        {text}
        { matchesTest.map(match => <Match key={ match.id } match={ match }></Match>) }
      </div>
    );
  }
}

export default App;
