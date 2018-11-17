import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = { active: '0' }
    this.categs = [
      { key: '0', name: 'Hoy' },
      { key: '1', name: 'Copa Libertadores' },
      { key: '2', name: 'Copa Sudamericana' },
      { key: '3', name: 'Superliga' },
      { key: '4', name: 'Copa Argentina' }
    ];
  };
  
  select(e){
    this.setState({ active: e.currentTarget.id })
    this.props.onChange(e.currentTarget.id);
  }

  render() {
    return (
      <div className="nav">
        <span className="title">Futbol Argentino</span>
        <div className="section-list">
          {this.categs.map(el =>
            <a href="#" className={'nav-item ' + (this.state.active === el.key ? 'active' : '') } id={el.key} key={el.key} onClick={ e => this.select(e) }>
              <span className="section">{el.name}</span>
            </a>)}
        </div>
      </div>
    );
  }
}

export default Navbar;
