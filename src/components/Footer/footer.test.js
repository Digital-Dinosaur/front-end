import { render, screen } from '@testing-library/react';
import React from 'react';

import Footer from './index.js';

describe('Testing the footer', () => {

  test('Should render the footer', () => {

    render(<Footer />);

    let element = screen.getByTestId('footer');

    expect(element).toBeInTheDocument();
    expect(element).toBeTruthy();
  });
});