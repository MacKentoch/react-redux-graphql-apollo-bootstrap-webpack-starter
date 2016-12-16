import React                from 'react';
import {
  shallow,
  mount
}                           from 'enzyme';
import chai, {expect}       from 'chai';
import sinon                from 'sinon';
import dirtyChai            from 'dirty-chai';
import Register             from '../../../src/app/views/register/Register';

chai.use(dirtyChai);


describe('Register VIEW ', () => {
  const props = {
    currentView: 'register',
    enterRegister: () => {},
    leaveRegister: () => {},

    userIsAuthenticated: false,
    mutationLoading: false,
    error: null,

    registerUser: () => {},
    resetError: () => {}
  };
  it('should render "Register" view', () => {
    const wrapper = shallow(<Register {...props} />);

    expect(wrapper).to.exist();
    expect(wrapper.containsMatchingElement(<legend>Register</legend>));
  });

  it('should call enterLogin action', () => {
    const enterRegisterAction = sinon.spy(); // called on componentDidMount
    /* eslint-disable no-unused-vars */
    const wrapper = mount(
      <Register
        {...props}
        currentView={props.currentView}
        enterRegister={enterRegisterAction}
        leaveRegister={()=>{}}
      />
    );
    /* eslint-enable no-unused-vars */
    expect(enterRegisterAction).to.have.property('callCount', 1);
  });

  it('should call leaveRegister action', () => {
    const leaveRegisterAction = sinon.spy(); // called on componentDidMount
    const wrapper = mount(
      <Register
        {...props}
        currentView={props.currentView}
        enterRegister={()=>{}}
        leaveRegister={leaveRegisterAction}
      />
    );
    wrapper.unmount();
    expect(leaveRegisterAction).to.have.property('callCount', 1);
  });
});
