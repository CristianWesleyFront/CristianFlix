import { call, put, select, takeLatest, delay } from 'redux-saga/effects';
import { selectSearchMovie } from './selectors';
import { moviesActions as actions } from '.';
import { MovieList } from 'types';
import { MovieErrorType } from './types';

import Api from 'service/Movies/moviesApi';

export function* getMovies() {
  yield delay(1000);
  // Select username from store
  const search: string = yield select(selectSearchMovie);

  try {
    // Call our request helper (see 'utils/request')

    const response = yield call(Api.getMovies, { name: search });

    const movies: MovieList[] = yield response?.Search;
    if (movies?.length > 0) {
      yield put(actions.MovieLoaded(movies));
    } else {
      yield put(actions.MovieError(MovieErrorType.MOVIE_NOT_FOUND));
    }
  } catch (err) {
    yield put(actions.MovieError(MovieErrorType.RESPONSE_ERROR));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* moviesSaga() {
  // Watches for loadRepos actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(actions.loadMovies.type, getMovies);
}
