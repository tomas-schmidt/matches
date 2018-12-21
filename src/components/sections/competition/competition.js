import React, { Component } from 'react';
import './competition.css'
import Matches from '../../matches/matches';
import Table from '../../table/table';
import matchesService from '../../../services/matches-service.js'
import Loader from '../../loader/loader';
import Brackets from '../../brackets/brackets';


class Competition extends Component {
  constructor(props) {
    super(props);
    this.state = { matches: [], table: [], loading: true };
  }

  componentWillMount() {
    matchesService.getCompetition(this.props.id).then(res => { this.setState({ matches: res.data.matches, table: res.data.table, loading: false }); });
  }

  render() {
    let competitionContent = !this.state.loading ? 
      <div className="competition-info">
        <Matches matches={this.state.matches}></Matches>
        <Table table={this.state.table}></Table>
        <Brackets></Brackets>
      </div> 
      : <Loader></Loader>;
      let type = this.props.comp.isLocal ? 'local' : 'inter';
    return (
      <div className="competition-container">
        <span className={`${type}-title comp-title`}>{this.props.comp.name}</span>
        {competitionContent}
      </div>
    );
  }
}

export default Competition;
