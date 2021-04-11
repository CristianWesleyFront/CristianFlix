import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/logoCristianFlix.png';

import { Container } from './styles';
import { SearchInput } from './SearchInput';

export function Header({ color }) {
  return (
    <Container color={color ? 'var(--background)' : 'transparent'}>
      <div className="headerLogo">
        <Link to="/">
          <img src={logo} alt="logo CristianFlix" />
        </Link>
      </div>
      <div className="alignRigth">
        <SearchInput />
        <div className="headerUser">
          <Link to="/">
            <img
              src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
              alt="user CristianFlix"
            />
          </Link>
        </div>
      </div>
    </Container>
  );
}
