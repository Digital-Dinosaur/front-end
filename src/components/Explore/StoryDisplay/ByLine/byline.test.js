import { render, screen } from '@testing-library/react';
import React from 'react';

import ByLine from './index.js';

describe('Testing the ByLine', () => {

  test('Should render the ByLine', () => {

    render(
        <ByLine />
    );

    let element = screen.getByTestId('by');

    expect(element).toBeInTheDocument();
    expect(element).toBeTruthy();
  });
});