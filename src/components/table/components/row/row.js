import React, { Component } from 'react';
import './row.css';

class Row extends Component {
  render() {
    let rowClass = this.props.data.is_title ? 'row-title' : 'row-basic';
    let logo = this.props.data.is_title ? null : <img className="row-team-logo" alt="home-logo" src={require("./../../../../assets/unknown.png")}/>;
    return (
      <tbody>
        <tr className={rowClass}>
          <td>{logo}</td>
          <td>{this.props.data.team_name}</td>
          <td>{this.props.data.points}</td>
          <td>{this.props.data.matches_played}</td>
          <td>{this.props.data.goals}</td>
          <td>{this.props.data.goals_recieved}</td>
        </tr>
      </tbody>
    );
  }
}

export default Row;
