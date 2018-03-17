import React from 'react';
import Login from '../../../src/app/views/login/Login';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { RouterHistory } from 'react-router';

describe('Login component', () => {
  it('renders as expected', () => {
    const props = {
      currentView: 'login',
      enterLogin: () => {},
      leaveLogin: () => {},
      loginUser: () => {},
      userIsAuthenticated: false,
      mutationLoading: false,
    };

    const component = renderer
      .create(
        <div>
          <RouterHistory>
            <Login {...props} />
          </RouterHistory>
        </div>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
