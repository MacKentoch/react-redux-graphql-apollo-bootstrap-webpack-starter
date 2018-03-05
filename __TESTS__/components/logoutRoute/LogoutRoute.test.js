import React from 'react';
import LogoutRoute from '../../../src/app/components/logoutRoute/LogoutRoute';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { MemoryRouter } from 'react-router';

jest.mock('../../../src/app/services/auth', () => {
  return {
    clearAllAppStorage() {
      return jest.fn(() => true);
    },
  };
});

describe('LogoutRoute component', () => {
  it('renders as expected', () => {
    const component = renderer
      .create(
        <div>
          <MemoryRouter initialEntries={['/', '/about']} initialIndex={1}>
            <LogoutRoute>
              <p>Jumbotron</p>
            </LogoutRoute>
          </MemoryRouter>
        </div>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
