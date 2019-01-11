import React, { Component } from 'react';
import './home.scss'
import Matches from '../../matches/matches'
import matchesService from '../../../../services/matches-service.js'
import Loader from '../../loader/loader';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true }
    this.matches = null;
  }

  componentWillMount() {
    matchesService.goHome().then(res => {
      this.matches = <Matches matches={res.data}></Matches>
      this.setState({ loading: false })
    });
  }

  render() {
    if (this.state.loading) return <Loader></Loader>;
    return (
      <div className="home-container">
        <span className="home-title">Hoy</span>
        {this.matches}
        <span className="home-subtitle">Esta semana</span>
        {this.matches}
      </div>
    );
  }
}

export default Home;
