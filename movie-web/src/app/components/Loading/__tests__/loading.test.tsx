import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { Loading } from '../index';

describe('<Loading />', () => {
  beforeEach(() => {
    render(<Loading />);
  });

  it('should render the loading', () => {
    expect(screen.getByLabelText(/lds-ring/i)).toBeInTheDocument();
  });
});
