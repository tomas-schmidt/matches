
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'

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
    return (
      <div className="App">
        <Navbar onChange={this.handleFieldChange}></Navbar>
        <Home></Home>
        {text}
      </div>
    );
  }
}

export default App;
