// @flow

import React from 'react';
import Jumbotron from '../../../src/front/components/jumbotron/Jumbotron';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme

describe('Jumbotron component', () => {
  it('renders as expected', () => {
    const component = renderer
      .create(
        <Jumbotron>
          <p>Jumbotron</p>
        </Jumbotron>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
