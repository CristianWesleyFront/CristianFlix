import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from './styles';

export function Search() {
  useEffect(() => {
    var element = document.getElementById('headerInput');
    element?.focus();
  }, []);

  return (
    <>
      <Helmet>
        <title>Search </title>
        <meta name="description" content="search page" />
      </Helmet>
      <Container></Container>
    </>
  );
}
