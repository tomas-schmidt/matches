import React, { Component } from 'react';
import './groups.css';
import Loader from '../loader/loader';

class Groups extends Component {
  render() {
    return (
      <div className="groups-container">
        <span>GROUPS!</span>
        <Loader></Loader>
      </div>
    );
  }
}

export default Groups;
