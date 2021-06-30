import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { LikedMoviesProvider } from '../useLikedMovies';
import { setStorage } from 'utils/localstorage';

const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <LikedMoviesProvider {...providerProps}>{ui}</LikedMoviesProvider>,
    renderOptions,
  );
};

describe('UseLikedMovies ', () => {
  beforeEach(() => {
    setStorage(
      'likedMovies',
      JSON.stringify([
        {
          Title: 'Batman',
          Year: '2020',
          imdbID: 'uehueuhe',
          Type: 'movie',
          Poster: 'qbeygege',
        },
      ]),
    );
  });

  it('should get movies', () => {});
});
