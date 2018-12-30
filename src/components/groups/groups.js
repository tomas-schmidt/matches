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
    console.log(this.state.groups); // TODO: Fix groups rendering
    if (this.state.loading) return <Loader></Loader>;
    return (
      <div className="groups-container">
        <span className="description">Grupos</span>
        {this.state.groups.map(group => <Table key={group} table={group}></Table>)}
      </div>
    );
  }
}

export default Groups;
