import React, { Component } from 'react';
import './competition.css'
import Matches from '../../matches/matches';
import Table from '../../table/table';
import matchesService from '../../../services/matches-service.js'

class Competition extends Component {
  constructor(props) {
    super(props);
    this.state = { matches: [] }
    matchesService.getMatches(this.props.id).then(res => { this.setState({ matches: res.data }); });
  }

  componentWillReceiveProps(props) {
    matchesService.getMatches(props.id).then(res => { this.setState({ matches: res.data }); });
  }

  render() {
    //TODO: Fix double rendering;
    return (
      <div>
        <span className={`${this.props.comp.type}-title`}>{this.props.comp.name}</span>
        <Matches matches={this.state.matches}></Matches>
        <Table competition={this.props.comp.key}></Table>
      </div>
    );
  }
}

export default Competition;
