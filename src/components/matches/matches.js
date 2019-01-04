import React, { Component } from 'react';
import Match from './components/match/match'
import './matches.css';
import matchesService from '../../services/matches-service.js'
import Loader from '../loader/loader';

class Matches extends Component {
  constructor(props) {
    super(props);
    this.description = 'Partidos';
  }

  render() {
    if (this.props.matches.length === 0) this.description = 'No se han encontrado partidos :(';
    return (
      <div className="matches-container">
        <span className="description">{this.description}</span>
        {this.props.matches.map(match => <Match key={match.id} match={match}></Match>)}
      </div>
    );
  }
}

export default Matches;
