import React                from 'react';
import {
  shallow,
  mount
}                           from 'enzyme';
import chai, {expect}       from 'chai';
import sinon                from 'sinon';
import dirtyChai            from 'dirty-chai';
import Protected            from '../../../src/app/views/protected/Protected';

chai.use(dirtyChai);


describe('Protected VIEW ', () => {
  const props = {
    currentView: 'protected',
    enterProtected: () => {},
    leaveProtected: () => {}
  };
  it('should render "Protected" view', () => {
    const wrapper = shallow(<Protected {...props} />);

    expect(wrapper).to.exist();
    expect(wrapper.containsMatchingElement(<h1>Protected</h1>));
  });

  it('should call enterProtected action', () => {
    const enterProtectedAction = sinon.spy(); // called on componentDidMount
    /* eslint-disable no-unused-vars */
    const wrapper = mount(
      <Protected
        currentView={props.currentView}
        enterProtected={enterProtectedAction}
        leaveProtected={()=>{}}
      />
    );
    /* eslint-enable no-unused-vars */
    expect(enterProtectedAction).to.have.property('callCount', 1);
  });
});
