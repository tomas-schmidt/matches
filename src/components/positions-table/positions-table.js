import React, { Component } from 'react';
import Loader from '../loader/loader';
import Table from '../table/table';
import matchesService from '../../services/matches-service.js'
import './positions-table.css'

class PositionsTable extends Component {
  constructor(props) {
    super(props);
    this.state = { table: [], loading: true };
  }

  componentWillMount() {
    matchesService.getTable(this.props.id).then(res => { this.setState({ table: res.data, loading: false }) });
  }
    
  render() {
    if (this.state.loading) return <Loader></Loader>;
    return (
      <div className="positions-table">
        <Table isPositionsTable={true} table={this.state.table}></Table>
      </div>
    );
  }
}

export default PositionsTable;
