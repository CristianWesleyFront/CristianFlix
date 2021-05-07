import React, { useState, useEffect } from 'react';
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
    dispatch(actions.searchMovie(e.target.search.value));
    setRedirect(true);
  };

  const clear = () => {
    dispatch(actions.searchMovie(''));
    setValue('');
  };

  const handleChange = e => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (redirect) {
      setRedirect(false);
    }
  }, [redirect]);

  return (
    <Container data-testid="Banner">
      {redirect && <Redirect to={`/search`} />}
      <div className="bannerGradient">
        <div className="search">
          <h2 className="title" data-testid="Banner-search-title">
            Search Movies
          </h2>
          <form onSubmit={handleSearch} data-testid="Banner-search-form">
            <input
              type="search"
              data-testid="Banner-search-input"
              placeholder="Search"
              name="search"
              value={value}
              onChange={handleChange}
            />
            <div className="bannerButtons">
              <button
                type="submit"
                className="seachButton"
                data-testid="Banner-search-submitButton"
              >
                Search
              </button>
              <span
                className="clearButton"
                onClick={clear}
                data-testid="Banner-search-clearButton"
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
