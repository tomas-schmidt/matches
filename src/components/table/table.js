import React, { Component } from 'react';
import './table.css';
import Row from './components/row/row'
class Table extends Component {
  constructor(props) {
    super(props);
    this.description = '';
    this.colors = '';
  }

  setPositionsTableValues() {
    this.description = 'Tabla de posiciones';
    this.colors = 'positions';
  }

  setGroupValues() {
    this.description = `Grupo ${this.props.group}`;
    this.colors = 'group';
  }

  render() {
    if (this.props.isPositionsTable) this.setPositionsTableValues();
    else this.setGroupValues();
    let title = { 'is_title': true, 'team_name': 'Equipo', 'points': 'Pts', 'matches_played': 'PJ', 'goals': 'GF', 'goals_recieved': 'GE' };
    return (
      <div className="table">
        <span className="description">{this.description}</span>
        <div className="table-container">
          <Row key={0} data={title}></Row>
          {this.props.table.map(team => <Row key={team.id_team} data={team}></Row>)}
        </div>
      </div>
    );
  }
}

export default Table;
