import React, { Component } from 'react';
import Match from './components/match/match'
import './matches.css';

class Matches extends Component {
  render() {
    let description;
    (this.props.matches.length) ? description = 'Partidos' : description = 'No se han encontrado partidos :(' ;
    return (
      <div className="matches-container">
        <span className="description">{description}</span>
        {this.props.matches.map(match => <Match key={match.id} match={match}></Match>)}
      </div>
    );
  }
}

export default Matches;
