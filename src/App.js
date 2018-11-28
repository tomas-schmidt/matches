
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar'
import Home from './components/sections/home/home'
import Libertadores from './components/sections/libertadores/libertadores'
import Sudamericana from './components/sections/sudamericana/sudamericana'
import Superliga from './components/sections/superliga/superliga'
import Argentina from './components/sections/argentina/argentina'
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
    let currentSection = this.state.currentCategory === 'Hoy' ? <Home id={this.getId('Hoy')}></Home>
    : this.state.currentCategory === 'Copa Libertadores' ? <Libertadores id={this.getId('Copa Libertadores')}></Libertadores> 
    : this.state.currentCategory === 'Copa Sudamericana' ? <Sudamericana id={this.getId('Copa Sudamericana')}></Sudamericana> 
    : this.state.currentCategory === 'Superliga' ? <Superliga id={this.getId('Superliga')}></Superliga>
    : this.state.currentCategory === 'Copa Argentina' ? <Argentina id={this.getId('Copa Argentina')}></Argentina> : '';
    return (
      <div className="App">
        <Navbar categs={this.state.categs} onChange={this.handleFieldChange}></Navbar>
        <div className="section-container">{currentSection}</div>
      </div>
    );
  }
}

export default App;
