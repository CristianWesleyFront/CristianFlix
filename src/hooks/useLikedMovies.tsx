import React, { createContext, useContext, useEffect, useState } from 'react';
import { MovieList } from 'types';
import { getStorage, setStorage } from 'utils/localstorage';

interface LikedMoviesContextData {
  likedMovies: any;
  createliked: (movieInput: MovieList) => Promise<void>;
  removeliked: (id: string) => Promise<void>;
  getMovies: () => Promise<void>;
}

const LikedMoviesContext = createContext<LikedMoviesContextData>(
  {} as LikedMoviesContextData,
);

export const LikedMoviesProvider: React.FC = ({ children }) => {
  const [likedMovies, setLikedMovies] = useState<any>([]);

  const getMovies = async () => {
    let liked = await getStorage('likedMovies');
    liked = liked && (await JSON.parse(liked));
    await setLikedMovies(liked);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const createliked = async (movieInput: MovieList): Promise<void> => {
    const newLikedMovies = await [...likedMovies, movieInput];

    await setStorage('likedMovies', JSON.stringify(newLikedMovies));

    await getMovies();
  };

  const removeliked = async (id: string): Promise<void> => {
    const newLikedMovies = await likedMovies.filter(e => e.imdbID !== id);

    await setStorage('likedMovies', JSON.stringify(newLikedMovies));

    await getMovies();
  };

  return (
    <LikedMoviesContext.Provider
      value={{
        likedMovies,
        createliked,
        removeliked,
        getMovies,
      }}
    >
      {children}
    </LikedMoviesContext.Provider>
  );
};

export function useLikedMovies() {
  const context = useContext(LikedMoviesContext);

  return context;
}
