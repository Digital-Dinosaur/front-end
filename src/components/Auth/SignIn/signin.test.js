import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../../store';
import SignIn from './index.js';

describe('Testing the SignIn', () => {
  test('Should render the SignIn', () => {
    render(
      <Provider store={store}>
        <SignIn />
      </Provider>
    );

    let element = screen.getByTestId('signin');

    expect(element).toBeInTheDocument();
    expect(element).toBeTruthy();
  });
});
