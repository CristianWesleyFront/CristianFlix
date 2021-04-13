/* eslint-disable import/no-anonymous-default-export */
import { Api } from '../api';
import { requestGet } from '../request';
export interface iGetMovies {
  name: string;
  page?: number;
}

export interface iGetOneMovies {
  id: string;
}

export default {
  getMovies: (params: iGetMovies) => {
    const { name, page } = params;

    return requestGet(Api, `getMovies?s=${name}${page ? `&page=${page}` : ''}`);
  },
  getOneMovie: (params: iGetOneMovies) => {
    const { id } = params;

    return requestGet(Api, `getOneMovie?i=${id}`);
  },
};
