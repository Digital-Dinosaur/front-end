import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../../../store';

import NetworkView from './index.js';

describe('Testing the NetworkView', () => {

  test('Should render the NetworkView', () => {

    render(
      <Provider store={store}>
        < NetworkView />
      </Provider>
    );

    let element = screen.getByTestId('networkV');

    expect(element).toBeInTheDocument();
    expect(element).toBeTruthy();
  });
});