import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';

const moviesSelector = (state: RootState) => state.movies;

export const selectSearchMovie = createSelector(
  [moviesSelector],
  moviesState => moviesState.searchMovie,
);

export const selectMovies = createSelector(
  [moviesSelector],
  moviesState => moviesState.Movies,
);

export const loadingMovies = createSelector(
  [moviesSelector],
  moviesState => moviesState.loading,
);

export const errorMovies = createSelector(
  [moviesSelector],
  moviesState => moviesState.error,
);

export const newPageMovies = createSelector(
  [moviesSelector],
  moviesState => moviesState.newPage,
);
