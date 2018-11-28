import axios from 'axios'
import environment from '../environments/environment';

const matchesService = {
  goHome: () => { return axios.get(`${environment.apiBaseUrl}`) },
  getMatches: idComp => { return axios.get(`${environment.apiBaseUrl}/matches/${idComp}`) },
  getCompetitions: () => { return axios.get(`${environment.apiBaseUrl}/competitions`) },
  getPositions: idComp => { return axios.get(`${environment.apiBaseUrl}/positions/${idComp}`) },
}

export default matchesService;
