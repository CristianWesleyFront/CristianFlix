import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';

const moviesSelector = (state: RootState) => state.movies;

export const selectSearchMovie = createSelector(
  [moviesSelector],
  moviesState => moviesState.searchMovie,
);
