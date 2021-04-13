import { MovieList } from 'types';

export interface MoviesState {
  searchMovie: string;
  loading: boolean;
  error?: MovieErrorType | null;
  Movies: MovieList[];
  totalResults: number;
  newPage: number;
}

export enum MovieErrorType {
  RESPONSE_ERROR = 1,
  MOVIE_NOT_FOUND = 2,
}
