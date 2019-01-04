import React, { Component } from 'react';
import './competition.css'
import Matches from '../../matches/matches';
import PositionsTable from '../../positions-table/positions-table';
import Brackets from '../../brackets/brackets';
import Groups from '../../groups/groups';
import matchesService from '../../../services/matches-service.js'


class Competition extends Component {
  componentWillMount() {
    const fetchData1 = matchesService.getGroups(this.props.id).then(res => { console.log('fetchdata1') });
    const fetchData2 = matchesService.getMatches(this.props.id).then(res => { console.log('fetchdata2') });

    Promise.all([ fetchData1, fetchData2 ]).then((responses) => {
      console.log(responses);
    });
  }

  render() {
    let type = this.props.comp.isLocal ? 'local' : 'inter';
    let table = this.props.comp.hasPositionsTable ? <PositionsTable id={this.props.id}></PositionsTable> : null;
    let brackets = this.props.comp.hasBrackets ? <Brackets id={this.props.id}></Brackets>: null;
    let groups = this.props.comp.hasGroups ? <Groups id={this.props.id}></Groups>: null;
    return (
      <div className="competition-container">
        <span className={`${type}-title comp-title`}>{this.props.comp.name}</span>
        <div className="competition-info">
          <div className="section-one">
            <Matches id={this.props.id}></Matches>
            {table}
            {brackets}
          </div>
          <div className="section-two">
            {groups}
          </div>
        </div>
      </div>
    );
  }
}

export default Competition;
