// @flow

import React from 'react';
import Register from '../../../src/front/views/register/Register';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { RouterHistory } from 'react-router';

describe('Register component', () => {
  it('renders as expected', () => {
    const component = renderer
      .create(
        <div>
          <RouterHistory>
            <Register />
          </RouterHistory>
        </div>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
