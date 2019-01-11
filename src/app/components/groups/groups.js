import React, { Component } from 'react';
import './groups.scss';
import Table from '../table/table'

class Groups extends Component {

  render() {
    let groups = []
    for (let g in this.props.groups) groups.push(this.props.groups[g]);
    return (
      <div className="groups-container">
        {groups.map(group =>
        <div key={group[0].team_group} className="group-container">
          <Table group={group[0].team_group} table={group}></Table>
        </div>
        )}
      </div>
    );
  }
}

export default Groups;
