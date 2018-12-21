import React, { Component } from 'react';
import './brackets.css'

class Brackets extends Component {
  render() {
    let table = [{"id_competition":1,"id_team":1,"goals":10,"goals_recieved":10,"matches_played":10,"points":10,"id_instance":10,"team_name":"River","instanceName":"8vos","instanceDetail":"2"},{"id_competition":1,"id_team":2,"goals":10,"goals_recieved":10,"matches_played":10,"points":10,"id_instance":10,"team_name":"Boca","instanceName":"8vos","instanceDetail":"2"},{"id_competition":1,"id_team":3,"goals":10,"goals_recieved":10,"matches_played":10,"points":10,"id_instance":10,"team_name":"Racing","instanceName":"8vos","instanceDetail":"2"},{"id_competition":1,"id_team":4,"goals":10,"goals_recieved":10,"matches_played":10,"points":10,"id_instance":10,"team_name":"Independiente","instanceName":"8vos","instanceDetail":"2"}];
    return (
      <div>
          Brackets
      </div>
    );
  }
}

export default Brackets;
