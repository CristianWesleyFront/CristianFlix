import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useMoviesSlice } from 'store/Movies';
import { selectSearchMovie } from 'store/Movies/selectors';
import { SearchContainer } from './styles';

export function SearchInput() {
  const dispatch = useDispatch();
  const { actions } = useMoviesSlice();
  const searchString = useSelector(selectSearchMovie);
  const [redirect, setRedirect] = useState(false);

  const handleSearch = (text: string) => {
    dispatch(actions.searchMovie(text));
    dispatch(actions.MovieError(null));
    if (text.length === 3) {
      setRedirect(true);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleSearch(e.target.search.value);
  };

  const handleChange = e => {
    handleSearch(e.target.value);
  };

  return (
    <SearchContainer onSubmit={handleSubmit} aria-label="HeaderInput-form">
      {redirect && <Redirect aria-label="redirectToSearch" to={`/search`} />}

      <input
        aria-label="HeaderInput"
        id="headerInput"
        type="search"
        name="search"
        placeholder="Search"
        value={searchString}
        onChange={handleChange}
      />
    </SearchContainer>
  );
}
