import React, { Component } from 'react';
import './brackets.css'
import matchesService from '../../services/matches-service.js'
import Loader from '../loader/loader';
import Bracket from './components/bracket/bracket'

class Brackets extends Component {
  constructor(props) {
    super(props);
    this.state = { brackets: [], loading: true };
  }

  componentWillMount() {
    matchesService.getBrackets(this.props.id).then(res => { this.setState({ brackets: res.data, loading: false }) });
  }

  render() {
    let loader = this.state.loading ? <Loader></Loader> : null;
    return (
      <div className="brackets-container">
        {loader}
        <Bracket bracket={this.state.brackets.one}></Bracket>
        <Bracket bracket={this.state.brackets.two}></Bracket>
      </div>
    );
  }
}

export default Brackets;
