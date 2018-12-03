import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = { active: 'Hoy' }
  };

  select(e) {
    this.setState({ active: e.currentTarget.id });
    this.props.onChange(e.currentTarget.id);
  }

  render() {
    return (
      <div className="nav">
        <span className="title">Futbol Argentino</span>
        <div className="section-list">
          {this.props.categs.map(el =>
            <a href="#" className={'nav-item ' + (this.state.active === el.name ? 'active' : '') } id={el.name} key={el.key} onClick={ e => this.select(e) }>
              <span className="section">{el.name}</span>
            </a>)}
        </div>
      </div>
    );
  }
}

export default Navbar;
