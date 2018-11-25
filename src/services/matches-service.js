import axios from 'axios'
import environment from '../environments/environment';

const matchesService = {
  getMatches: comp => { return axios.get(`${environment.apiBaseUrl}/${comp}`) },
  getCompetitions: () => { return axios.get(`${environment.apiBaseUrl}/competitions`) },
  getPositionsTable: () => { }
}

export default matchesService;
