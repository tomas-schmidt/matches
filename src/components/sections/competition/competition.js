import React, { Component } from 'react';
import './competition.css'
import Matches from '../../matches/matches';
import Table from '../../table/table';
import matchesService from '../../../services/matches-service.js'

class Competition extends Component {
  constructor(props) {
    super(props);
    this.state = { matches: [], table: [] };
  }

  componentWillMount() {
    matchesService.getCompetition(this.props.id).then(res => { this.setState({ matches: res.data.matches, table: res.data.table }); });
  }

  render() {
    return (
      <div>
        <span className={`${this.props.comp.type}-title`}>{this.props.comp.name}</span>
        <Matches matches={this.state.matches}></Matches>
        <Table competition={this.props.comp.name} table={this.state.table}></Table>
      </div>
    );
  }
}

export default Competition;
