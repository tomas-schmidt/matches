import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 'hoy'
    }
  };
  
  select(e){
    this.setState({ active: e.currentTarget.id})
  }
  render() {
    return (
      <div className="nav">
        <span className="title">Futbol Argentino</span>
        <div className="section-list">
          <a href="#" className={`nav-item ${this.state.active === 'hoy' ? 'active' : '' }`} id="hoy" onClick={ e => this.select(e) }><span className="section">Hoy</span></a>
          <a href="#" className={`nav-item ${this.state.active === 'lib' ? 'active' : '' }`} id="lib" onClick={ e => this.select(e) }><span className="section">Copa Libertadores</span></a>
          <a href="#" className={`nav-item ${this.state.active === 'sud' ? 'active' : '' }`} id="sud" onClick={ e => this.select(e) }><span className="section">Copa Sudamericana</span></a>          
          <a href="#" className={`nav-item ${this.state.active === 'arg' ? 'active' : '' }`} id="arg" onClick={ e => this.select(e) }><span className="section">Copa Argentina</span></a>
        </div>
      </div>
    );
  }
}

export default Navbar;
