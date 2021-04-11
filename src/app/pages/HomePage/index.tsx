import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { useMoviesSlice } from 'store/Movies';
import { selectMovies } from 'store/Movies/selectors';

import { Container } from './styles';

import { useLikedMovies } from 'hooks/useLikedMovies';

import { Banner } from 'app/components/Banner';
import { MoviesRow } from 'app/components/MoviesRow';

export function HomePage() {
  const dispatch = useDispatch();
  const { actions } = useMoviesSlice();
  const { likedMovies } = useLikedMovies();

  const movies = useSelector(selectMovies);

  const useEffectOnMount = (effect: React.EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    // When initial state username is not null, submit the form to load repos
    dispatch(actions.loadMovies());
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
            <MoviesRow title={'Liked Movies'} items={likedMovies} />
          )}
          <MoviesRow title={'BATMAN Movies'} items={[...movies, ...movies]} />
        </section>
      </Container>
    </>
  );
}
