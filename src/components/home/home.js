import React, { Component } from 'react';
import './home.css'

class Home extends Component {

  render() {
    let test = false;
    let exp = test ? <span>exp</span> : <span>exp2</span>
    return (
      <div className="home-container">
        {exp}
      </div>
    );
  }
}

export default Home;
