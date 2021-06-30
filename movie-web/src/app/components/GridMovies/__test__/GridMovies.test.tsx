import * as React from 'react';
import { MemoryRouter } from 'react-router';
import { render, screen } from '@testing-library/react';

import { GridMovies } from '../index';

describe('<GridMovies />', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <GridMovies
          search="batman"
          items={[
            {
              Title: 'Batman:begins',
              Year: '2020',
              imdbID: 'ueheuehehu',
              Type: 'filme',
              Poster: 'heuheueh',
              liked: false,
            },
          ]}
        />
      </MemoryRouter>,
    );
  });

  it('should render GrindMovies', () => {
    expect(screen.getByLabelText(/GridMovies-title/i)).toBeInTheDocument();
    expect(screen.getByText(/"batman"/i)).toBeInTheDocument();

    expect(screen.getByAltText(/Batman:begins-poster/i)).toBeInTheDocument();
    expect(screen.getByText(/Batman:begins/i)).toBeInTheDocument();
    expect(screen.getByText(/2020/i)).toBeInTheDocument();
  });
});
