import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { LikeButton } from './LikeButton';

import { MovieListLayout } from 'types';

interface iProps {
  item: MovieListLayout;
}

export function MovieItem({ item }: iProps) {
  return (
    <Link to={`/movie/${item?.imdbID}`}>
      <Container>
        <img src={item?.Poster} alt={`${item?.Title}-poster`} />
        <div className="informations">
          <span className="title">{item?.Title}</span>
          <span className="year">{item?.Year}</span>
          <LikeButton item={item} />
        </div>
      </Container>
    </Link>
  );
}
