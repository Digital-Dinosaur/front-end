import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import React from 'react';

import Graph from './index.js';

describe('Testing the Graph', () => {

  test('Should render the Graph', () => {

    render(
      <Provider store={store}>
        <Graph />
      </Provider>
    );

    let element = screen.getByTestId('graph');

    expect(element).toBeInTheDocument();
    expect(element).toBeTruthy();
  });
});