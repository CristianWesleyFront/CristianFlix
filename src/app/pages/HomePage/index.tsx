import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { useMoviesSlice } from 'store/Movies';
import {
  selectMovies,
  errorMovies,
  loadingMovies,
} from 'store/Movies/selectors';

import { Container } from './styles';

import { useLikedMovies } from 'hooks/useLikedMovies';

import { Banner } from 'app/components/Banner';
import { MoviesRow } from 'app/components/MoviesRow';

export function HomePage() {
  const dispatch = useDispatch();
  const { actions } = useMoviesSlice();
  const { likedMovies } = useLikedMovies();

  const movies = useSelector(selectMovies);
  const loading = useSelector(loadingMovies);
  const error = useSelector(errorMovies);

  const useEffectOnMount = (effect: React.EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    dispatch(actions.searchMovie(''));
    dispatch(actions.MovieLoaded([]));
  });

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A home page" />
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
          <MoviesRow
            title={'BATMAN Movies'}
            items={[...movies, ...movies]}
            error={error}
            loading={loading}
          />
        </section>
      </Container>
    </>
  );
}
