import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { useMoviesSlice } from 'store/Movies';
import { selectMovies } from 'store/Movies/selectors';

import { Container } from './styles';

import { Header } from 'app/components/Header';
import { Banner } from 'app/components/Banner';
import { MoviesRow } from 'app/components/MoviesRow';

export function HomePage() {
  const dispatch = useDispatch();
  const { actions } = useMoviesSlice();

  const movies = useSelector(selectMovies);

  const useEffectOnMount = (effect: React.EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    // When initial state username is not null, submit the form to load repos

    dispatch(actions.loadMovies());
  });

  const [headerBlack, setHeaderBlack] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      window.scrollY > 10 ? setHeaderBlack(true) : setHeaderBlack(false);
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Container>
        <Header color={headerBlack} />
        <Banner />
        <section className="listMovies">
          <MoviesRow title={'BATMAN Movies'} items={[...movies, ...movies]} />
          <div id="spiderman">spiderman</div>
          <div id="witch">witch</div>
          <div id="hacker">hacker</div>
        </section>
      </Container>
    </>
  );
}
