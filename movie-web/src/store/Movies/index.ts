import { PayloadAction } from '@reduxjs/toolkit';
import { MovieList } from 'types';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { moviesSaga } from './saga';
import { MoviesState, MovieErrorType } from './types';

export const initialState: MoviesState = {
  searchMovie: '',
  loading: false,
  error: null,
  Movies: [],
  totalResults: 0,
  newPage: 2,
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
      state.newPage = 2;
    },
    MovieLoaded(state, action: PayloadAction<MovieList[]>) {
      const Movies = action.payload;
      state.Movies = Movies;
      state.loading = false;
    },
    MovieError(state, action: PayloadAction<MovieErrorType | null>) {
      state.error = action.payload;
      state.loading = false;
    },
    loadMoviesNewPage(state) {
      state.loading = true;
      state.error = null;
    },
    MovieLoadedNewPage(state, action: PayloadAction<MovieList[]>) {
      const Movies = action.payload;
      state.Movies = [...state.Movies, ...Movies];
      state.loading = false;
    },
    setNewPage(state, action: PayloadAction<number>) {
      const newPage = action.payload;
      state.newPage = newPage;
    },
  },
});

export const { actions: moviesActions, reducer } = slice;

export const useMoviesSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: moviesSaga });
  return { actions: slice.actions };
};
