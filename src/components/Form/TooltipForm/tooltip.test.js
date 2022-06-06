import { render, screen } from '@testing-library/react';
import React from 'react';

import Tooltip from './index.js';

describe('Testing the Tooltip component', () => {
  test('Should Exist on page load', () => {
    render(<Tooltip />);

    let element = screen.getByTestId('tooltip');

    expect(element).toBeInTheDocument();
    expect(element).toBeTruthy();
  });
});
