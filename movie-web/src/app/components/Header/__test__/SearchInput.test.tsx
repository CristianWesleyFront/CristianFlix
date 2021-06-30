import * as React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { render, screen, fireEvent } from '@testing-library/react';

import { configureAppStore } from 'store/configureStore';

import { SearchInput } from '../SearchInput';

describe('<SearchInput />', () => {
  let store;

  beforeEach(() => {
    store = configureAppStore();

    render(
      <Provider store={store}>
        <MemoryRouter>
          <SearchInput />
        </MemoryRouter>
      </Provider>,
    );
  });

  it('should render the SearchInput', () => {
    expect(screen.getByLabelText('HeaderInput-form')).toBeInTheDocument();
    expect(screen.getByLabelText('HeaderInput')).toBeInTheDocument();
  });

  it('should search if change or press enter', () => {
    const input = screen.getByLabelText('HeaderInput');
    const form = screen.getByLabelText('HeaderInput-form');

    fireEvent.change(input, { target: { value: 'Batman' } });
    fireEvent.submit(form, { target: { search: { value: 'Batman' } } });

    expect(store.getState().movies.searchMovie).toBe('Batman');
    expect(store.getState().movies.error).toBe(null);
    expect(input.getAttribute('value')).toBe('Batman');
  });

  // it("should react if search 3 letters", () => {
  //   const input = screen.getByLabelText('HeaderInput');

  //   fireEvent.change(input, { target: { value: 'Bat' } });

  //   const redirect = screen.getByLabelText('redirectToSearch');

  //   expect(redirect).toBeInTheDocument();
  // })
});
