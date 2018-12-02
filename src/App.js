
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar'
import Home from './components/sections/home/home'
import Competition from './components/sections/competition/competition'
import matchesService from './services/matches-service.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentCategory: 'Hoy', categs: [{ key: '0', name: 'Hoy' }] };
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.getCompetitions();
  };

  handleFieldChange(cat) {
    this.setState({ currentCategory: cat });
  }

  getCompetitions() {
    matchesService.getCompetitions().then(res => { this.setState({ categs: this.state.categs.concat(res.data)}); });
  }

  getId = comp => { return this.state.categs.find(x => x.name === comp).key; }

  render() {
    let currentSection = this.state.currentCategory === 'Hoy' ? <Home id="0"></Home>
    : <Competition name={this.state.currentCategory} id={this.getId(this.state.currentCategory)}></Competition>
    return (
      <div className="App">
        <Navbar categs={this.state.categs} onChange={this.handleFieldChange}></Navbar>
        <div className="section-container">{currentSection}</div>
      </div>
    );
  }
}

export default App;
