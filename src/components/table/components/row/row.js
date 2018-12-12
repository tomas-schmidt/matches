import React, { Component } from 'react';
import './row.css';

class Row extends Component {
  render() {
    let rowClass = this.props.data.is_title ? 'row row-title' : 'row row-basic';
    return (
      <div className={rowClass}>
        <span className="name">{this.props.data.team_name}</span>
        <span>{this.props.data.points}</span>
        <span>{this.props.data.matches_played}</span>
        <span>{this.props.data.goals}</span>
        <span>{this.props.data.goals_recieved}</span>
      </div>
    );
  }
}

export default Row;
