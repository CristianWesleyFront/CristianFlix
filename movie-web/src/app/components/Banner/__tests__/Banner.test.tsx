import * as React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { render, screen, fireEvent } from '@testing-library/react';

import { configureAppStore } from 'store/configureStore';

import { Banner } from '../index';

describe('<Banner />', () => {
  let store;

  beforeEach(() => {
    store = configureAppStore();

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Banner />
        </MemoryRouter>
      </Provider>,
    );
  });

  it('should render the banner', () => {
    expect(screen.getByLabelText(/banner img/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/banner img/i)).toHaveStyle({
      backgroundImage:
        'https://occ-0-3852-3851.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbjlMwIFRYm5hHuFUesxRW8SKq-dqlGLN5yZJ3QZRgIrUEXEmNofkq_T9s1mkGgQh8cW2hW6ek412OdVSheRW7MR9JJ5.jpg?r=fc4',
    });
    expect(screen.getByText('Search Movies')).toBeInTheDocument();
    expect(screen.getByLabelText(/banner search input/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/banner submit button/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/banner clear button/i)).toBeInTheDocument();
  });

  it('should change input value', () => {
    const input = screen.getByLabelText(/banner search input/i);

    fireEvent.change(input, { target: { value: 'Batman' } });

    expect(input.getAttribute('value')).toBe('Batman');
  });

  it('should clear input value and redux if click clear button', () => {
    const input = screen.getByLabelText(/banner search input/i);
    const clearButton = screen.getByLabelText(/banner clear button/i);

    fireEvent.change(input, { target: { value: 'Batman' } });

    fireEvent.click(clearButton);

    expect(input.getAttribute('value')).toBe('');
  });

  it('should search if click search button or press enter', () => {
    let input = screen.getByLabelText(/banner search input/i);
    const form = screen.getByTestId('form-search');

    fireEvent.change(input, { target: { value: 'Batman' } });

    fireEvent.submit(form);

    expect(store.getState().movies.searchMovie).toBe('Batman');
  });
});
