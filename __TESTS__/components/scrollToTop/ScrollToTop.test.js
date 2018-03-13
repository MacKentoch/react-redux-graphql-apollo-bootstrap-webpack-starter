import React from 'react';
import ScrollToTop from '../../../src/app/components/scrollToTop/ScrollToTop';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { MemoryRouter } from 'react-router';

describe('ScrollToTop component', () => {
  it('renders as expected', () => {
    const component = renderer
      .create(
        <div>
          <MemoryRouter>
            <ScrollToTop />
          </MemoryRouter>
        </div>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
