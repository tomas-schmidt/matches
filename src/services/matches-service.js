import axios from 'axios'
import environment from '../environments/environment';

const matchesService = {
  goHome: () => { return axios.get(`${environment.apiBaseUrl}`) },
  getMatches: codeComp => { return axios.get(`${environment.apiBaseUrl}/matches/${codeComp}`) },
  getCompetitions: () => { return axios.get(`${environment.apiBaseUrl}/competitions`) },
  getPositions: codeComp => { return axios.get(`${environment.apiBaseUrl}/positions/${codeComp}`) },
}

export default matchesService;
