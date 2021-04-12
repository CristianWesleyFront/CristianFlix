import React from 'react';
import { BsFillHeartFill } from 'react-icons/bs';
// import { Container } from './styles';
import { useLikedMovies } from 'hooks/useLikedMovies';

export function LikeButton({ item }) {
  const { createliked, removeliked } = useLikedMovies();

  return (
    <div
      className="like"
      onClick={() => {
        item?.liked
          ? removeliked(item?.imdbID)
          : createliked({
              Title: item?.Title,
              Year: item?.Year,
              imdbID: item?.imdbID,
              Type: item?.Type,
              Poster: item?.Poster,
            });
      }}
    >
      <BsFillHeartFill
        style={{
          fontSize: '2rem',
          color: item?.liked ? 'var(--red)' : '#fff',
        }}
      />
    </div>
  );
}
