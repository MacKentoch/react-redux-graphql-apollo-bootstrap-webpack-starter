import React from 'react';
import NavigationBar from '../../../src/app/components/navigation/NavigationBar';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { MemoryRouter } from 'react-router';

describe('NavigationBar (navigation) component', () => {
  it('renders as expected (not authenticated)', () => {
    const props = {
      brand: 'brand',
      handleLeftNavItemClick: () => {},
      handleRightNavItemClick: () => {},
      userIsAuthenticated: false,
      navModel: {
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
        leftLinks: [
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
      },
    };
    const component = renderer
      .create(
        <div>
          <MemoryRouter>
            <NavigationBar {...props} />
          </MemoryRouter>
        </div>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
