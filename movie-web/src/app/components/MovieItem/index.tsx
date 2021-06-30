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
      <img
        src={item?.Poster}
        alt={`${item?.Title}-poster`}
        aria-label={`${item?.Title}-label-img`}
      />
      <div className="informations">
        <span className="title" aria-label={`${item?.Title}-label-title`}>
          {item?.Title}
        </span>
        <span className="year" aria-label={`${item?.Title}-label-year`}>
          {item?.Year}
        </span>
        <div className="actions" aria-label={`${item?.Title}-label-actions`}>
          <LikeButton item={item} />
          <Link
            to={`/movie/${item?.imdbID}`}
            aria-label={`${item?.Title}-label-link`}
          >
            <FaPlay />
          </Link>
        </div>
      </div>
    </Container>
  );
}
