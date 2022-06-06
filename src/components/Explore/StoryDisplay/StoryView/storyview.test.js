import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../../../store';
import StoryView from './index.js';

describe('Testing the StoryView', () => {

  test('Should render the StoryView', () => {

    render(
      <Provider store={store}>
        <StoryView tooltips={{key: 'value'}} description={'string'} />
      </Provider>
    );

    let element = screen.getByTestId('storyview');

    expect(element).toBeInTheDocument();
    expect(element).toBeTruthy();
  });
});