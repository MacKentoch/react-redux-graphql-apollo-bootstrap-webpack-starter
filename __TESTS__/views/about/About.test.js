import React from 'react';
import About from '../../../src/app/views/about/About';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { RouterHistory } from 'react-router';

describe('About component', () => {
  it('renders as expected', () => {
    const component = renderer
      .create(
        <div>
          <RouterHistory>
            <About />
          </RouterHistory>
        </div>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
