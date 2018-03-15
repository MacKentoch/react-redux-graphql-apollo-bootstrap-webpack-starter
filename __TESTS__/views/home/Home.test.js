import React from 'react';
import Home from '../../../src/app/views/home/Home';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { RouterHistory } from 'react-router';

describe('Home component', () => {
  it('renders as expected', () => {
    const component = renderer
      .create(
        <div>
          <RouterHistory>
            <Home />
          </RouterHistory>
        </div>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
