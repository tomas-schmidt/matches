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
      <div className="competition-container">
        <span className={`${this.props.comp.type}-title comp-title`}>{this.props.comp.name}</span>
        <div className="competition-info">
          <Matches matches={this.state.matches}></Matches>
          <Table table={this.state.table}></Table>
        </div>
      </div>
    );
  }
}

export default Competition;
