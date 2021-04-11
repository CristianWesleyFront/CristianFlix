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
  const [redirectHome, setRedirecHome] = useState(false);

  const handleChange = e => {
    dispatch(actions.searchMovie(e.target.value));
    setRedirect(true);
    if (e.target.value === '') {
      setRedirecHome(true);
    }
  };

  return (
    <SearchContainer>
      {redirect && <Redirect to={`/search?q=${searchString}`} />}
      {redirectHome && <Redirect to={`/`} />}

      <input
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
