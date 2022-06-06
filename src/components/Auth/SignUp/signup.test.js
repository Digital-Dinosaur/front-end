import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../../store';
import Signup from './index.js';

describe('Testing the Signup', () => {
  test('Should render the Signup', () => {
    render(
      <Provider store={store}>
        <Signup />
      </Provider>
    );

    let element = screen.getByTestId('signup');

    expect(element).toBeInTheDocument();
    expect(element).toBeTruthy();
  });
});
