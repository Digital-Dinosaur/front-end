import { render, screen } from '@testing-library/react';
import React from 'react';

import Favorites from './index.js';

describe('Testing the Favorites', () => {
  test('Should render the Favorites', () => {
    render(<Favorites />);

    let element = screen.getByTestId('favorites');

    expect(element).toBeInTheDocument();
    expect(element).toBeTruthy();
  });
});
