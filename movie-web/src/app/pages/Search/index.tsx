/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { Container } from './styles';
import { useMoviesSlice } from 'store/Movies';
import {
  selectMovies,
  selectSearchMovie,
  errorMovies,
  loadingMovies,
  newPageMovies,
} from 'store/Movies/selectors';
import { useLikedMovies } from 'hooks/useLikedMovies';
import { GridMovies } from 'app/components/GridMovies';
import { MovieListLayout } from 'types';
import { Loading } from 'app/components/Loading';
import { Error, NotFound } from 'app/components/Error';

export function Search() {
  const dispatch = useDispatch();
  const { actions } = useMoviesSlice();
  const movies = useSelector(selectMovies);
  const search = useSelector(selectSearchMovie);
  const loading = useSelector(loadingMovies);
  const error = useSelector(errorMovies);
  const newPage = useSelector(newPageMovies);

  const { likedMovies } = useLikedMovies();

  useEffect(() => {
    const element = document.getElementById('headerInput');
    element?.focus();

    if (search !== '') {
      dispatch(actions.loadMovies());
    }
  }, [actions, dispatch, search]);

  useEffect(() => {
    dispatch(actions.loadMoviesNewPage());
  }, [newPage]);

  const HandleNewPage = (page: number) => {
    dispatch(actions.setNewPage(page));
  };

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

        {loading === false && error === null && dataFilter.length > 0 && (
          <>
            <GridMovies items={dataFilter} search={search} />
            <button
              className="loadMone"
              onClick={() => HandleNewPage(newPage + 1)}
            >
              Load more..
            </button>
          </>
        )}
      </Container>
    </>
  );
}
