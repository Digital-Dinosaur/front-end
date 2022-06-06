import { render, screen } from '@testing-library/react';
import React from 'react';

import Contributions from './index.js';

describe('Testing the Contributions', () => {

  test('Should render the Contributions', () => {

    render(<Contributions />);

    let element = screen.getByTestId('contributions');

    expect(element).toBeInTheDocument();
    expect(element).toBeTruthy();
  });
});