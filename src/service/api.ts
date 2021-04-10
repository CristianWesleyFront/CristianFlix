import axios from 'axios';

//const BASE_URL = 'http://localhost:3000/api';

const API_OMDB_URL = 'http://www.omdbapi.com/';

export const Api = axios.create({
  baseURL: `${API_OMDB_URL}`,
});
