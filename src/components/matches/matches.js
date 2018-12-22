import React, { Component } from 'react';
import Match from './components/match/match'
import './matches.css';
import matchesService from '../../services/matches-service.js'
import Loader from '../loader/loader';

class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = { matches: [], loading: true };
  }

  componentWillMount() {
    matchesService.getMatches(this.props.id).then(res => { this.setState({ matches: res.data, loading: false }) });
  }

  render() {
    let description = 'No se han encontrado partidos :(';
    if (!this.state.loading && this.state.matches.length) description = 'Partidos';
    let header = this.state.loading ?
      <Loader></Loader> :
      <span className="description">{description}</span>
    return (
      <div className="matches-container">
        {header}
        {this.state.matches.map(match => <Match key={match.id} match={match}></Match>)}
      </div>
    );
  }
}

export default Matches;
