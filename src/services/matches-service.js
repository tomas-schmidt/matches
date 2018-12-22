import axios from 'axios'
import environment from '../environments/environment';

const matchesService = {
  goHome: () => { return axios.get(`${environment.apiBaseUrl}`) },
  getMatches: idComp => { return axios.get(`${environment.apiBaseUrl}/matches/${idComp}`) },
  getCompetitions: () => { return axios.get(`${environment.apiBaseUrl}/competitions`) },
  getTable: idComp => { return axios.get(`${environment.apiBaseUrl}/table/${idComp}`) },
  getCompetition: idComp => { return axios.get(`${environment.apiBaseUrl}/competition/${idComp}`) },
  getGroups: idComp => { return axios.get(`${environment.apiBaseUrl}/groups/${idComp}`) },
  getBrackets: idComp => { return axios.get(`${environment.apiBaseUrl}/brackets/${idComp}`) },
}

export default matchesService;
