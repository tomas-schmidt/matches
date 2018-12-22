import React, { Component } from 'react';
import './competition.css'
import Matches from '../../matches/matches';
import Table from '../../table/table';
import Brackets from '../../brackets/brackets';


class Competition extends Component {
  render() {
    let type = this.props.comp.isLocal ? 'local' : 'inter';
    return (
      <div className="competition-container">
        <span className={`${type}-title comp-title`}>{this.props.comp.name}</span>
        <div className="competition-info">
          <Matches key={this.props.id} id={this.props.id}></Matches>
          {/* <Table hasTable={this.props.comp.hasTable} key={this.props.id} id={this.props.id}></Table>; */}
          {/* <Brackets hasBrackets={this.props.comp.hasBrackets} key={this.props.id} id={this.props.id}></Brackets> */}
        </div>
      </div>
    );
  }
}

export default Competition;
