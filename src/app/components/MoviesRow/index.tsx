import React, { useState, useMemo } from 'react';

import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

import { Container } from './styles';
import { MovieItem } from '../MovieItem';
import { useLikedMovies } from 'hooks/useLikedMovies';
import { MovieListLayout } from 'types';

import { Loading } from 'app/components/Loading';
import { Error } from 'app/components/Error';

export function MoviesRow({ title, items, error, loading }) {
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
      return items.map(e => ({ ...e, liked: false }));
    }

    let newArray: MovieListLayout[] = [];

    items?.forEach(item => {
      if (likedMovies?.filter(e => e.imdbID === item.imdbID).length > 0) {
        newArray.push({
          ...item,
          liked: true,
        });
      } else {
        newArray.push({
          ...item,
          liked: false,
        });
      }
    });

    return newArray;
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

      <div className="feddBack">
        {loading && <Loading />}

        {error === 1 && <Error />}
      </div>

      {loading === false && error === null && (
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
                <MovieItem key={key} item={item} />
              ))}
          </div>
        </div>
      )}
    </Container>
  );
}
