import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <span className="title">Futbol Argentino</span>
        <div className="section-list">
          <a href="#" className="nav-item"><span className="section">Copa Libertadores</span></a>
          <a href="#" className="nav-item"><span className="section">Copa Sudamericana</span></a>
          <a href="#" className="nav-item"><span className="section">Superliga</span></a>
          <a href="#" className="nav-item"><span className="section">Copa Argentina</span></a>
        </div>
      </div>
    );
  }
}

export default Navbar;
