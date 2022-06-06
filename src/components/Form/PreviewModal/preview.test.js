import { render, screen } from '@testing-library/react';
import React from 'react';

import Modal from './index.js';

describe('Testing on the preview modal', () => {
  test('Modal div should exist while waiting for trigger', () => {
    render(<Modal />);

    let element = screen.getByTestId('prev-modal');

    expect(element).toBeInTheDocument();
    expect(element).toBeTruthy();
  });
});
