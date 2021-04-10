import React from 'react';
import { Container } from './styles';

export function Banner() {
  return (
    <Container>
      <div className="bannerGradient">
        <div className="search">
          <h2 className="title">Search Movies</h2>
          <input type="search" placeholder="Search" />
          <div className="bannerButtons">
            <a href="/search" className="seachButton">
              Search
            </a>
            <span className="clearButton">clear</span>
          </div>
        </div>
      </div>
    </Container>
  );
}
