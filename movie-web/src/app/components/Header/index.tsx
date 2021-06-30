import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/logoCristianFlix.png';

import { Container } from './styles';
import { SearchInput } from './SearchInput';

export function Header() {
  const [color, setColor] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      window.scrollY > 10 ? setColor(true) : setColor(false);
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <Container
      aria-label="App Hearder"
      color={color ? 'var(--background)' : 'transparent'}
    >
      <div className="headerLogo" aria-label="Hearder Logo">
        <Link to="/">
          <img src={logo} alt="logo CristianFlix" />
        </Link>
      </div>
      <div className="alignRigth">
        <SearchInput />
        <div className="headerUser" aria-label="Hearder User">
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
