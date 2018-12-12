import React, { Component } from 'react';
import './table.css';

class Table extends Component {
  render() {
    return (
      <div>
        <span>{this.props.competition}</span>
        <div className="table-container">
          {this.props.table.map(team => <span className="table-position" key={team.id_team}>{team.team_name} {team.points} {team.matches_played} {team.goals} {team.goals_recieved}</span>)}
        </div>
      </div> 
    );
  }
}

export default Table;
