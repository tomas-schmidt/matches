import React, { Component } from 'react';
import './competition.css'
import Matches from '../../matches/matches';
import Table from '../../table/table';
import Brackets from '../../brackets/brackets';


class Competition extends Component {
  render() {
    let type = this.props.comp.isLocal ? 'local' : 'inter';
    let table = this.props.comp.hasTable ? <Table id={this.props.id}></Table> : null;
    let brackets = this.props.comp.hasBrackets ? <Brackets id={this.props.id}></Brackets>: null;
    return (
      <div className="competition-container">
        <span className={`${type}-title comp-title`}>{this.props.comp.name}</span>
        <div className="competition-info">
          <Matches id={this.props.id}></Matches>
          {table}
          {brackets}
        </div>
      </div>
    );
  }
}

export default Competition;
