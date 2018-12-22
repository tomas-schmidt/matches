import React, { Component } from 'react';
import './brackets.css'
import matchesService from '../../services/matches-service.js'
import Loader from '../loader/loader';

class Brackets extends Component {
  constructor(props) {
    super(props);
    this.state = { brackets: [], loading: true };
  }

  componentWillMount() {
    matchesService.getBrackets(this.props.id).then(res => { this.setState({ brackets: res.data, loading: false }) });
  }

  render() {
    return (
      <div className="brackets-container">
        Brackets
        <Loader></Loader>
      </div>
    );
  }
}

export default Brackets;
