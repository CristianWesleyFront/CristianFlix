import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { Error, NotFound } from '../index';

describe('<Error />', () => {
  beforeEach(() => {
    render(<Error />);
  });

  it('should render error', () => {
    expect(screen.getByText(/Server Error/i)).toBeInTheDocument();
    expect(
      screen.getByText(/We are already looking to solve the problem./i),
    ).toBeInTheDocument();
  });
});

describe('<NotFound />', () => {
  beforeEach(() => {
    render(<NotFound search="Batman" />);
  });

  it('should render not found', () => {
    expect(
      screen.getByText(/You search for "Batman" did not have any matches./i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Suggestions:/i)).toBeInTheDocument();
    expect(screen.getByText(/Try different keywords/i)).toBeInTheDocument();
  });
});
