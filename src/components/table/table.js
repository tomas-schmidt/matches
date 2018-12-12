import React, { Component } from 'react';
import './table.css';

class Table extends Component {
  render() {
    return (
      <div className="table-container">
        {this.props.table.map(team => 
          <div className="table-position" key={team.id_team}>
            <span>{team.team_name}</span>
            <span>{team.points}</span>
            <span>{team.matches_played}</span>
            <span>{team.goals}</span>
            <span>{team.goals_recieved}</span>
          </div>)}
      </div>
    );
  }
}

export default Table;
