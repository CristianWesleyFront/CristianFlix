import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { BsFillHeartFill } from 'react-icons/bs';
import Api from 'service/Movies/moviesApi';
import { Movie as IMovie } from 'types';
import { MovieErrorType } from 'store/Movies/types';
import { Helmet } from 'react-helmet-async';

import { Container, ContainerInformations, LikeButton } from './styles';
import { Loading } from 'app/components/Loading';
import { Error } from 'app/components/Error';

import { useLikedMovies } from 'hooks/useLikedMovies';

export function MovieOne() {
  const [movie, setMovie] = useState<IMovie | any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<MovieErrorType | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const { likedMovies, createliked, removeliked } = useLikedMovies();

  const { id } = useParams<any>();

  const SearchMovie = useCallback(async () => {
    try {
      await setLoading(true);
      const response: any = await Api.getOneMovie({ id });

      if (response?.Title) {
        await setMovie(response);

        await setLoading(false);
      } else {
        await setError(MovieErrorType.MOVIE_NOT_FOUND);
        await setLoading(false);
      }
    } catch (error) {
      await setError(MovieErrorType.RESPONSE_ERROR);
      await setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    SearchMovie();
  }, [SearchMovie]);

  useEffect(() => {
    if (movie) {
      setIsLiked(
        likedMovies?.length > 0
          ? likedMovies?.findIndex(e => e.imdbID === movie.imdbID) >= 0
          : false,
      );
    }
  }, [likedMovies, movie]);

  return (
    <>
      <Helmet>
        <title>{movie?.Title || 'Movie not found'}</title>
        <meta name="description" content="Movie page" />
      </Helmet>
      <Container>
        {loading && <Loading />}

        {error === 2 && (
          <h3>You search for {`"${id}"`} did not have any matches.</h3>
        )}

        {error === 1 && <Error />}

        {loading === false && error === null && movie !== null && (
          <ContainerInformations>
            <div className="informations">
              <div className="name">{movie?.Title}</div>
              <div className="info">
                <div className="points">{movie?.imdbRating} pontos</div>
                <div className="year">
                  {new Date(movie?.Released).getFullYear()}
                </div>
                <div className="time">{movie?.Runtime}</div>
              </div>
              <div className="description">{movie?.Plot}</div>

              <div className="informationText">
                Genre: <strong> {movie?.Genre} </strong>
              </div>
              <div className="informationText">
                Production: <strong> {movie?.Production} </strong>
              </div>
              <div className="informationText">
                Actors: <strong> {movie?.Actors} </strong>
              </div>
              <div className="informationText">
                Awards: <strong> {movie?.Awards} </strong>
              </div>
              <div className="actions">
                <LikeButton
                  isLiked={isLiked}
                  onClick={() => {
                    isLiked
                      ? removeliked(movie?.imdbID)
                      : createliked({
                          Title: movie?.Title,
                          Year: movie?.Year,
                          imdbID: movie?.imdbID,
                          Type: movie?.Type,
                          Poster: movie?.Poster,
                        });
                  }}
                >
                  <BsFillHeartFill />
                  {isLiked ? ' LIKED !' : ' LIKE !'}
                </LikeButton>
              </div>
            </div>
            <img src={movie?.Poster} alt={movie?.Title} />
          </ContainerInformations>
        )}
      </Container>
    </>
  );
}
