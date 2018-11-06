import React, { Component } from 'react';
import Match from './components/match/match'
import './matches.css';

class Matches extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        { this.props.matches.map(match => <Match key={ match.id } match={ match }></Match>) }
      </div>
    );
  }
}

export default Matches;
