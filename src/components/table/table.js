import React, { Component } from 'react';
import './table.css';

class Table extends Component {
  render() {
    console.log(this.props.table);
    return (
      <div>
        <span>{this.props.competition}</span>
        <div className="table-container">
          {this.props.table.map(team => <span key={team.id_team}>{team.team_name}</span>)}
        </div>
      </div> 
    );
  }
}

export default Table;
