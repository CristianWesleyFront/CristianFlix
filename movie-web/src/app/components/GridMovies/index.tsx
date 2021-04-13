import React from 'react';

import { Container } from './styles';
import { MovieItem } from '../MovieItem';

import { MovieListLayout } from 'types';

interface iProps {
  items: MovieListLayout[];
  search: string;
}

export function GridMovies({ items, search }: iProps) {
  return (
    <Container>
      <h1>
        You searched: <span>{search}</span>
      </h1>
      <section className="flex">
        {items?.map(e => (
          <div className="item" key={e.Title}>
            <MovieItem item={e} />
          </div>
        ))}
      </section>
    </Container>
  );
}
