import React, { Component } from 'react';
import './table.css';
import matchesService from '../../services/matches-service.js'

class Table extends Component {
  constructor(props) {
    this.state = { table: [] }
    matchesService.getTable(this.props.idComp).then(res => { this.setState({ table: res.data }); });
  }
  render() {
    return (
        <span>Table! {this.props.competition}</span>
    );
  }
}

export default Table;
