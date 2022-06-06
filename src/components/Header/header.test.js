import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';

import Header from './index.js';

describe('Testing the Header', () => {
  test('Should render the Header', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    let element = screen.getByTestId('header');

    expect(element).toBeInTheDocument();
    expect(element).toBeTruthy();
  });
});
