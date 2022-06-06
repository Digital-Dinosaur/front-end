import { render, screen } from '@testing-library/react';
import React from 'react';

import Recents from './index.js';

describe('Testing the Recents', () => {

  test('Should render the Recents', () => {

    render(<Recents />);

    let element = screen.getByTestId('recents');

    expect(element).toBeInTheDocument();
    expect(element).toBeTruthy();
  });
});