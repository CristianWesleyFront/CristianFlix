import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useMoviesSlice } from 'store/Movies';
import { selectSearchMovie } from 'store/Movies/selectors';
import { SearchContainer } from './styles';

export function SearchInput() {
  const dispatch = useDispatch();
  const { actions } = useMoviesSlice();
  const searchString = useSelector(selectSearchMovie);
  const [value, setValue] = useState(searchString);
  const [redirec, setRedirec] = useState(false);

  const handleSearch = e => {
    e.preventDefault();
    dispatch(actions.searchMovie(e.target.search.value));
    setRedirec(true);
  };

  const handleChange = e => {
    setValue(e.target.value);
  };

  useEffect(() => {
    setValue(searchString);
  }, [searchString]);

  return (
    <SearchContainer onSubmit={handleSearch}>
      {redirec && <Redirect to={`/search?q=${value}`} />}
      <input
        id="headerInput"
        type="search"
        name="search"
        placeholder="Search"
        value={value}
        onChange={handleChange}
      />
    </SearchContainer>
  );
}
