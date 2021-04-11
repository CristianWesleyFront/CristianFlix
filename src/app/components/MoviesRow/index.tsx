import React, { useState, useMemo } from 'react';

import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

import { Container } from './styles';

import { LikeButton } from './LikeButton';
import { useLikedMovies } from 'hooks/useLikedMovies';

export function MoviesRow({ title, items }) {
  const [scrollX, setScrollX] = useState(0);
  const { likedMovies } = useLikedMovies();

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items?.length * 200;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };

  const dataFilter = useMemo(() => {
    if (likedMovies?.length === 0) {
      return items;
    }

    return items?.map(item => {
      if (likedMovies?.filter(e => e.imdbID === item.imdbID).length > 0) {
        return {
          ...item,
          liked: true,
        };
      } else {
        return {
          ...item,
          liked: false,
        };
      }
    });
  }, [items, likedMovies]);

  return (
    <Container className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow-left" onClick={handleLeftArrow}>
        <MdNavigateBefore style={{ fontSize: '2rem' }} />
      </div>
      <div className="movieRow-right" onClick={handleRightArrow}>
        <MdNavigateNext style={{ fontSize: '2rem' }} />
      </div>

      <div className="movieRowListarea">
        <div
          className="movieRowList"
          style={{
            marginLeft: scrollX,
            width: items?.length * 200,
          }}
        >
          {dataFilter?.length > 0 &&
            dataFilter?.map((item, key) => (
              <div key={key} className="movieRowItem">
                <img src={item?.Poster} alt={`${item?.Title}-poster`} />
                <div className="informations">
                  <span className="title">{item?.Title}</span>
                  <span className="year">{item?.Year}</span>
                  <LikeButton item={item} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </Container>
  );
}
