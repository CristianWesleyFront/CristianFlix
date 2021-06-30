import * as React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { render, screen, fireEvent } from '@testing-library/react';

import { configureAppStore } from 'store/configureStore';

import { Header } from '../index';

describe('<Hearder />', () => {
  let store;
  beforeEach(() => {
    store = configureAppStore();

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>,
    );
  });

  it('should render the Hearder', () => {
    expect(screen.getByLabelText('App Hearder')).toBeInTheDocument();
    expect(screen.getByLabelText('Hearder Logo')).toBeInTheDocument();
    expect(screen.getByLabelText('Hearder User')).toBeInTheDocument();
  });

  it('should change header color for black with scrool > 10 ', () => {
    fireEvent.scroll(window, { target: { scrollY: 300 } });

    const Header = screen.getByLabelText('App Hearder');

    expect(Header.getAttribute('color')).toBe('var(--background)');
  });

  it('should change header color for transparent with scrool < 10 ', () => {
    fireEvent.scroll(window, { target: { scrollY: 0 } });

    const Header = screen.getByLabelText('App Hearder');

    expect(Header.getAttribute('color')).toBe('transparent');
  });
});
