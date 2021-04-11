/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useQuery from 'hooks/useQueryParams';
import { Helmet } from 'react-helmet-async';
import { Container } from './styles';
import { useMoviesSlice } from 'store/Movies';
import {
  selectMovies,
  selectSearchMovie,
  errorMovies,
  loadingMovies,
} from 'store/Movies/selectors';
import { useLikedMovies } from 'hooks/useLikedMovies';
import { GridMovies } from 'app/components/GridMovies';
import { MovieListLayout } from 'types';

import { Loading } from 'app/components/Loading';
import { Error, NotFound } from 'app/components/Error';

export function Search() {
  const queryParms = useQuery();
  const dispatch = useDispatch();
  const { actions } = useMoviesSlice();
  const movies = useSelector(selectMovies);
  const search = useSelector(selectSearchMovie);
  const loading = useSelector(loadingMovies);
  const error = useSelector(errorMovies);
  const querySearch = queryParms.get('q');
  const { likedMovies } = useLikedMovies();

  useEffect(() => {
    const element = document.getElementById('headerInput');
    element?.focus();

    if (
      search === '' &&
      querySearch !== null &&
      loading === false &&
      error === null
    ) {
      dispatch(actions.searchMovie(querySearch));
    }
    if (search.length > 2) {
      dispatch(actions.loadMovies());
    }
  }, [actions, dispatch, search]);

  const dataFilter = useMemo(() => {
    if (likedMovies?.length === 0) {
      return movies.map(e => ({ ...e, liked: false }));
    }

    let newArray: MovieListLayout[] = [];

    movies?.forEach(item => {
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
  }, [movies, likedMovies]);

  return (
    <>
      <Helmet>
        <title>Search </title>
        <meta name="description" content="search page" />
      </Helmet>
      <Container>
        {loading && <Loading />}

        {error === 2 && <NotFound search={search} />}

        {error === 1 && <Error />}

        {loading === false && error === null && (
          <GridMovies items={dataFilter} search={search} />
        )}
      </Container>
    </>
  );
}
