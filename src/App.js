
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar'
import Home from './components/sections/home/home'
import Libertadores from './components/sections/libertadores/libertadores'
import Sudamericana from './components/sections/sudamericana/sudamericana'
import Superliga from './components/sections/superliga/superliga'
import Argentina from './components/sections/argentina/argentina'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCategory: 0
    };
    this.handleFieldChange = this.handleFieldChange.bind(this);
  };

  handleFieldChange(cat) {
    this.setState({ 
      currentCategory: cat,
    });
  }

  render() {
    let currentSection = this.state.currentCategory === 0 ? <Home></Home>
    : this.state.currentCategory === 1 ? <Libertadores></Libertadores> 
    : this.state.currentCategory === 2 ? <Sudamericana></Sudamericana> 
    : this.state.currentCategory === 3 ? <Superliga></Superliga>
    : this.state.currentCategory === 4 ? <Argentina></Argentina> : ''
    return (
      <div className="App">
        <Navbar onChange={this.handleFieldChange}></Navbar>
        { currentSection }
      </div>
    );
  }
}

export default App;
