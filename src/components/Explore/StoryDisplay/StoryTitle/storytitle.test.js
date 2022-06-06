import { render, screen } from '@testing-library/react';
import React from 'react';

import Graph from './index.js';

describe('Testing the Graph', () => {

  test('Should render the Graph', () => {

    render(
      <Graph />
    );

    let element = screen.getByTestId('title');

    expect(element).toBeInTheDocument();
    expect(element).toBeTruthy();
  });
});