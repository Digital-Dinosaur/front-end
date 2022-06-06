
import { render, screen } from '@testing-library/react';
import React from 'react';

import DescForm from './index.js';

describe('Testing the form', () => {

  test('Should render the description form', () => {

    render(<DescForm />);

    let element = screen.getByTestId('desc-form');

    expect(element).toBeInTheDocument();
    expect(element).toBeTruthy();
  });
});