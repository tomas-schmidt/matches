import React, { Component } from 'react';
import './groups.css';
import Loader from '../loader/loader';
import matchesService from '../../services/matches-service.js'
import Table from '../table/table'

class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = { groups: [], loading: true }
  }

  componentWillMount() {
    matchesService.getGroups(this.props.id).then(res => { this.setState({ groups: res.data, loading: false }) });
  }

  render() {
    if (this.state.loading) return <Loader></Loader>;
    let groups = []
    for (let g in this.state.groups) groups.push(this.state.groups[g]);
    return (
      <div key={group[0].team_group} className="groups-container">
        {groups.map(group =>
        <div className="group-container">
          <Table group={group[0].team_group} table={group}></Table>
        </div>
        )}
      </div>
    );
  }
}

export default Groups;
