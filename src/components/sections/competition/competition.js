import React, { Component } from 'react';
import './competition.scss'
import Matches from '../../matches/matches';
import PositionsTable from '../../positions-table/positions-table';
import Brackets from '../../brackets/brackets';
import Groups from '../../groups/groups';
import matchesService from '../../../services/matches-service.js'
import Loader from '../../loader/loader';

class Competition extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true }
    this.table = this.brackets = this.groups = this.matches = null;
  }

  componentWillMount() {
    const p1 = this.props.comp.hasGroups ? matchesService.getGroups(this.props.id).then(res => this.groups = <Groups groups={res.data}></Groups>) : null;
    const p2 = matchesService.getMatches(this.props.id).then(res => this.matches = <Matches matches={res.data}></Matches>);
    const p3 = this.props.comp.hasBrackets ? matchesService.getBrackets(this.props.id).then(res => this.brackets = <Brackets brackets={res.data}></Brackets>) : null;
    const p4 = this.props.comp.hasPositionsTable ? matchesService.getTable(this.props.id).then(res => this.table = <PositionsTable table={res.data}></PositionsTable>): null;
    Promise.all([p1, p2, p3, p4]).then(res => this.setState({ loading: false }));
  }

  render() {
    if (this.state.loading) return <Loader></Loader>
    const type = this.props.comp.isLocal ? 'local-title' : 'inter-title';
    return (
      <div className="competition-container">
        <span className={`${type} comp-title`}>{this.props.comp.name}</span>
        <div className="competition-info">
          <div className="section-one">{this.matches} {this.table} {this.brackets}</div>
          <div className="section-two">{this.groups}</div>
        </div>
      </div>
    );
  }
}

export default Competition;
