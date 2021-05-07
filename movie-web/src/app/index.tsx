/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';
import { Header } from 'app/components/Header';

import { HomePage } from './pages/HomePage/Loadable';
import { Search } from './pages/Search/Loadable';
import { MovieOne } from './pages/MovieOne/Loadable';

import { NotFoundPage } from './components/NotFoundPage/Loadable';

export function App() {
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
    <BrowserRouter>
      <Helmet titleTemplate="%s - CRISTIANFLIX" defaultTitle="movie">
        <meta name="description" content="A cristainFlix application" />
      </Helmet>
      <Header data-testid="app-Header" color={headerBlack} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/movie/:id" component={MovieOne} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
