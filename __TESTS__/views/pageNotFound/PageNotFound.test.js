import React from 'react';
import PageNotFound from '../../../src/app/views/pageNotFound/PageNotFound';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { RouterHistory } from 'react-router';

describe('PageNotFound component', () => {
  it('renders as expected', () => {
    const component = renderer
      .create(
        <div>
          <RouterHistory>
            <PageNotFound />
          </RouterHistory>
        </div>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
