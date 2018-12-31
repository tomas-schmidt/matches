import React, { Component } from 'react';
import Match from './components/match/match'
import './matches.css';
import matchesService from '../../services/matches-service.js'
import Loader from '../loader/loader';

class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = { matches: [], loading: true };
    this.description = 'Partidos';
  }

  componentWillMount() {
    if (this.props.id) matchesService.getMatches(this.props.id).then(res => { this.setState({ matches: res.data, loading: false }) });
    else matchesService.goHome().then(res => { this.setState({ matches: res.data, loading: false }); });
  }

  render() {
    if (this.state.loading) return <Loader></Loader>;
    if (this.state.matches.length === 0) this.description = 'No se han encontrado partidos :(';
    return (
      <div className="matches-container">
        <span className="description">{this.description}</span>
        {this.state.matches.map(match => <Match key={match.id} match={match}></Match>)}
      </div>
    );
  }
}

export default Matches;
