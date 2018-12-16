import React, { Component } from 'react';
import './table.css';
import Row from './components/row/row'

class Table extends Component {
  render() {
    let title = { 'is_title': true, 'team_name': 'Equipo', 'points': 'Pts', 'matches_played': 'PJ', 'goals': 'GF', 'goals_recieved': 'GE' };
    return (
      <div className="table">
        <span className="description">Tabla de posiciones</span>
        <div className="table-container">
          <Row key={0} data={title}></Row>
          {this.props.table.map(team => <Row key={team.id_team} data={team}></Row>)}
        </div>
      </div>
    );
  }
}

export default Table;
