import React from 'react';
import RightNav from '../../../../src/app/components/navigation/rightNav/RightNav';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { MemoryRouter } from 'react-router';

describe('RightNav (navigation) component', () => {
  it('renders as expected', () => {
    const props = {
      onRightNavButtonClick: () => {},
      userIsAuthenticated: false,
      rightLinks: [{ link: 'link', label: 'label', viewName: '/' }],
    };
    const component = renderer
      .create(
        <div>
          <MemoryRouter>
            <RightNav {...props} />
          </MemoryRouter>
        </div>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
