import React, { Component } from 'react';
import Table from '../table/table';
import './positions-table.scss'

class PositionsTable extends Component {
    
  render() {
    return (
      <div className="positions-table">
        <Table isPositionsTable={true} table={this.props.table}></Table>
      </div>
    );
  }
}

export default PositionsTable;
