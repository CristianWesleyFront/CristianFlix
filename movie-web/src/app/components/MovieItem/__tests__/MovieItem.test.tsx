import * as React from 'react';
import { MemoryRouter } from 'react-router';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import { MovieItem } from '../index';
import { LikedMoviesProvider, useLikedMovies } from 'hooks/useLikedMovies';

describe('<MovieItem />', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <LikedMoviesProvider>
          <MovieItem
            item={{
              Title: 'Batman:begins',
              Year: '2020',
              imdbID: 'ueheuehehu',
              Type: 'filme',
              Poster: 'heuheueh',
              liked: false,
            }}
          />
        </LikedMoviesProvider>
      </MemoryRouter>,
    );
  });

  it('should render movie item', () => {
    expect(screen.getByAltText(/Batman:begins-poster/i)).toBeInTheDocument();
    expect(screen.getByText(/Batman:begins/i)).toBeInTheDocument();
    expect(screen.getByText(/2020/i)).toBeInTheDocument();
  });

  it('Should movie be liked if like button is clicked', () => {
    let likedButton = screen.getByLabelText('likeButton');

    fireEvent.click(likedButton);

    const { likedMovies } = useLikedMovies();

    expect(likedMovies[0].liked).toBe(true);
  });
});
