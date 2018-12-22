import React, { Component } from 'react';
import './table.css';
import Row from './components/row/row'
import matchesService from '../../services/matches-service.js'
import Loader from '../loader/loader';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = { table: [], loading: true };
  }

  componentWillMount() {
    console.log('mounting');
    matchesService.getTable(this.props.id).then(res => { this.setState({ table: res.data, loading: false }) });
  }

  render() {
    let loader = this.state.loading ? <Loader></Loader> : null;
    let title = { 'is_title': true, 'team_name': 'Equipo', 'points': 'Pts', 'matches_played': 'PJ', 'goals': 'GF', 'goals_recieved': 'GE' };
    return (
      <div className="table">
        <span className="description">Tabla de posiciones</span>
        <div className="table-container">
          <Row key={0} data={title}></Row>
          {loader}
          {this.state.table.map(team => <Row key={team.id_team} data={team}></Row>)}
        </div>
      </div>
    );
  }
}

export default Table;
