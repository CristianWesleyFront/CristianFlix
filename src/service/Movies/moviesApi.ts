/* eslint-disable import/no-anonymous-default-export */
import { Api } from '../api';
import { requestGet } from '../request';
export interface iGetMovies {
  name: string;
}

export interface iGetOneMovies {
  id: string;
}

const API_OMDB_KEY = '9163174a';

export default {
  getMovies: (params: iGetMovies) => {
    const { name } = params;

    return requestGet(Api, `?apikey=${API_OMDB_KEY}&s=${name}`);
  },
  getOneMovie: (params: iGetOneMovies) => {
    const { id } = params;

    return requestGet(Api, `?apikey=${API_OMDB_KEY}&i=${id}`);
  },
};
