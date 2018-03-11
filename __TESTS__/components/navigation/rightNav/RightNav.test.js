import React from 'react';
import RightNav from '../../../../src/app/components/navigation/rightNav/RightNav';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { MemoryRouter } from 'react-router';

describe('RightNav (navigation) component', () => {
  it('renders as expected (not authenticated)', () => {
    const props = {
      onRightNavButtonClick: () => {},
      userIsAuthenticated: false,
      rightLinks: [
        {
          link: 'link',
          label: 'label',
          viewName: '/',
          btnLink: { showWhenUserAuth: false, alwaysShows: true },
        },
        {
          link: 'link',
          label: 'label',
          viewName: '/',
          btnLink: { showWhenUserAuth: true, alwaysShows: false },
        },
        {
          link: 'link',
          label: 'label',
          viewName: '/',
          btnLink: { showWhenUserAuth: true, alwaysShows: true },
        },
        {
          link: 'link',
          label: 'label',
          viewName: '/',
          btnLink: { showWhenUserAuth: false, alwaysShows: false },
        },
      ],
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

  it('renders as expected (authenticated)', () => {
    const props = {
      onRightNavButtonClick: () => {},
      userIsAuthenticated: true,
      rightLinks: [
        {
          link: 'link',
          label: 'label',
          viewName: '/',
          btnLink: { showWhenUserAuth: false, alwaysShows: true },
        },
        {
          link: 'link',
          label: 'label',
          viewName: '/',
          btnLink: { showWhenUserAuth: true, alwaysShows: false },
        },
        {
          link: 'link',
          label: 'label',
          viewName: '/',
          btnLink: { showWhenUserAuth: true, alwaysShows: true },
        },
        {
          link: 'link',
          label: 'label',
          viewName: '/',
          btnLink: { showWhenUserAuth: false, alwaysShows: false },
        },
      ],
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
