import { render, screen } from '@testing-library/react';
import React from 'react';

import NetworkControls from './index.js';

describe('Testing the NetworkControls', () => {

  test('Should render the NetworkControls', () => {

    render(<NetworkControls />);

    let element = screen.getByTestId('networkC');

    expect(element).toBeInTheDocument();
    expect(element).toBeTruthy();
  });
});