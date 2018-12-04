import React, { Component } from 'react';
import './table.css';

class Table extends Component {
  render() {
    return (
        <span>Table! {this.props.table}</span>
    );
  }
}

export default Table;
