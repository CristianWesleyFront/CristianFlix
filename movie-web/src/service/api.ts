import axios from 'axios';

const API_OMDB_URL = 'http://localhost:8080/movie';

export const Api = axios.create({
  baseURL: `${API_OMDB_URL}`,
});
