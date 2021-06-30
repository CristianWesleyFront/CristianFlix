import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Container } from './styles';
import { useDispatch } from 'react-redux';
import { useMoviesSlice } from 'store/Movies';

export function Banner() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { actions } = useMoviesSlice();

  const handleSearch = e => {
    e.preventDefault();
    dispatch(actions.searchMovie(value));
    setRedirect(true);
  };

  const clear = () => {
    dispatch(actions.searchMovie(''));
    setValue('');
  };

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <Container aria-label="banner img">
      {redirect && <Redirect to={`/search`} />}
      <div className="bannerGradient">
        <div className="search">
          <h2 className="title" aria-label="banner title">
            Search Movies
          </h2>
          <form
            onSubmit={handleSearch}
            aria-label="form search"
            data-testid="form-search"
          >
            <input
              aria-label="banner search input"
              type="search"
              placeholder="Search"
              name="search"
              value={value}
              onChange={handleChange}
            />
            <div className="bannerButtons">
              <button
                type="submit"
                className="seachButton"
                aria-label="banner submit button"
              >
                Search
              </button>
              <span
                className="clearButton"
                onClick={clear}
                aria-label="banner clear button"
              >
                clear
              </span>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}
