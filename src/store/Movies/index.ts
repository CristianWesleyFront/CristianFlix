import { PayloadAction } from '@reduxjs/toolkit';
import { MovieList } from 'types';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { moviesSaga } from './saga';
import { MoviesState, MovieErrorType } from './types';

export const initialState: MoviesState = {
  searchMovie: 'batman',
  loading: false,
  error: null,
  Movies: [],
};

const slice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    searchMovie(state, action: PayloadAction<string>) {
      state.searchMovie = action.payload;
    },
    loadMovies(state) {
      state.loading = true;
      state.error = null;
      state.Movies = [];
    },
    MovieLoaded(state, action: PayloadAction<MovieList[]>) {
      const Movies = action.payload;
      state.Movies = Movies;
      state.loading = false;
    },
    repoError(state, action: PayloadAction<MovieErrorType>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions: moviesActions, reducer } = slice;

export const useMoviesSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: moviesSaga });
  return { actions: slice.actions };
};
