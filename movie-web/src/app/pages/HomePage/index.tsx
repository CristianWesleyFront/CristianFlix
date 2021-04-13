import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { useMoviesSlice } from 'store/Movies';

import { Container } from './styles';

import { useLikedMovies } from 'hooks/useLikedMovies';

import { Banner } from 'app/components/Banner';
import { MoviesRow } from 'app/components/MoviesRow';

export function HomePage() {
  const dispatch = useDispatch();
  const { actions } = useMoviesSlice();
  const { likedMovies } = useLikedMovies();

  const clear = () => {
    dispatch(actions.searchMovie(''));
    dispatch(actions.MovieLoaded([]));
  };

  useEffect(clear, [dispatch, actions]);

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Home page" />
      </Helmet>

      <Container>
        <Banner />
        <section className="listMovies">
          {likedMovies?.length > 0 && (
            <MoviesRow
              title={'Liked Movies'}
              items={likedMovies}
              error={null}
              loading={false}
            />
          )}
        </section>
      </Container>
    </>
  );
}
