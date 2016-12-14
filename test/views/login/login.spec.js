import React                from 'react';
import {
  shallow,
  mount
}                           from 'enzyme';
import chai, {expect}       from 'chai';
import sinon                from 'sinon';
import dirtyChai            from 'dirty-chai';
import Login                from '../../../src/app/views/login/Login';

chai.use(dirtyChai);


describe('Login VIEW ', () => {
  const props = {
    currentView: 'login',
    enterLogin: () => {},
    leaveLogin: () => {},

    user: {username: ''},
    userIsAuthenticated: false,
    mutationLoading: false,
    error: null,
    loginUser: () => {},
    onUserLoggedIn: () => {},
    resetError: () => {}
  };
  it('should render "Login" view', () => {
    const wrapper = shallow(<Login {...props} />);

    expect(wrapper).to.exist();
    expect(wrapper.containsMatchingElement(<legend>Login</legend>));
  });

  it('should call enterLogin action', () => {
    const enterLoginAction = sinon.spy(); // called on componentDidMount
    /* eslint-disable no-unused-vars */
    const wrapper = mount(
      <Login
        {...props}
        currentView={props.currentView}
        enterLogin={enterLoginAction}
        leaveLogin={()=>{}}
      />
    );
    /* eslint-enable no-unused-vars */
    expect(enterLoginAction).to.have.property('callCount', 1);
  });

  it('should call leaveLogin action', () => {
    const leaveLoginAction = sinon.spy(); // called on componentDidMount
    const wrapper = mount(
      <Login
        {...props}
        currentView={props.currentView}
        enterLogin={()=>{}}
        leaveLogin={leaveLoginAction}
      />
    );
    wrapper.unmount();
    expect(leaveLoginAction).to.have.property('callCount', 1);
  });
});
