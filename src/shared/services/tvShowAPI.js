import axios from 'axios';
import { API_KEY_PARAM, BASE_URL } from './config';

export class TVShowAPI {

  static async fetchPopulars() {
     const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
     return response.data.results;
   }

  static async fetchRecommendtionsById(tvShowId){
    const response = await axios.get(`${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`);
    console.log(`${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`);
    return response.data.results;
   }

  static async  fetchByTitle(title) {
    const response = await axios.get(`${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`);
    return response.data.results;
  }

   async fetchById(tvShowId) {}
}