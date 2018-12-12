import React, { Component } from 'react';
import './table.css';
import Row from './components/row/row'

class Table extends Component {
  render() {
    let title = { 'is_title': true, 'team_name': 'Equipo', 'points': 'Puntos', 'matches_played': 'PJ', 'goals': 'Goles', 'goals_recieved': 'GEC' };
    return (
      <div className="table-container">
        <Row key={0} data={title}></Row>
        {this.props.table.map(team => <Row key={team.id_team} data={team}></Row>)}
      </div>
    );
  }
}

export default Table;
