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
    matchesService.getMatches(this.props.id).then(res => { this.setState({ matches: res.data }); });
    matchesService.getTable(this.props.id).then(res => { this.setState({ table: res.data }); });
  }

  render() {
    return (
      <div>
        <span className={`${this.props.comp.type}-title`}>{this.props.comp.name}</span>
        <Matches matches={this.state.matches}></Matches>
        <Table table={this.state.table}></Table>
      </div>
    );
  }
}

export default Competition;
