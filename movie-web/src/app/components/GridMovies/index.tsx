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
      <h1 aria-label="GridMovies-title">
        You searched:{' '}
        <span aria-label="GridMovies-search">{`"${search}"`}</span>
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
