import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { LikeButton } from './LikeButton';
import { FaPlay } from 'react-icons/fa';
import { MovieListLayout } from 'types';

interface iProps {
  item: MovieListLayout;
}

export function MovieItem({ item }: iProps) {
  return (
    <Container>
      <img src={item?.Poster} alt={`${item?.Title}-poster`} />
      <div className="informations">
        <span className="title">{item?.Title}</span>
        <span className="year">{item?.Year}</span>
        <div className="actions">
          <LikeButton item={item} />
          <Link to={`/movie/${item?.imdbID}`}>
            <FaPlay />
          </Link>
        </div>
      </div>
    </Container>
  );
}
