import React, { Component } from 'react';
import './brackets.css'
import matchesService from '../../services/matches-service.js'
import Loader from '../loader/loader';
import Bracket from './components/bracket/bracket'
import BracketMatch from './components/bracket-match/bracket-match';

class Brackets extends Component {
  constructor(props) {
    super(props);
    this.state = { brackets: [], loading: true };
  }

  componentWillMount() {
    matchesService.getBrackets(this.props.id).then(res => { this.setState({ brackets: res.data, loading: false }) });
  }

  render() {
    if (this.state.loading) return <Loader></Loader>;
    return (
      <div className="brackets-container">
        <Bracket id={1} bracket={this.state.brackets.one}></Bracket>
        <BracketMatch isFinal={true} match={this.state.brackets.final[0]}></BracketMatch>
        <Bracket id={2} bracket={this.state.brackets.two}></Bracket>
      </div>
    );
  }
}

export default Brackets;
