import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Home></Home>
      </div>
    );
  }
}

export default App;
