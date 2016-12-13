import chai, {expect} from 'chai';
import dirtyChai      from 'dirty-chai';
import {
  enterHome,
  leaveHome,
  enterAbout,
  leaveAbout,
  enterLogin,
  leaveLogin,
  enterRegister,
  leaveRegister,
  enterProtected,
  leaveProtected
}                       from '../../../src/app/redux/modules/views';

chai.use(dirtyChai);


describe('redux - action creator "views"', () => {
  it('should return enterHome action object', () => {
    const enterHomeACTION = {
      type:         'ENTER_HOME_VIEW',
      currentView:  'home'
    };
    expect(enterHome()).to.deep.equal(enterHomeACTION);
  });

  it('should return leaveHome action object', () => {
    const leaveHomeACTION = {
      type:         'LEAVE_HOME_VIEW',
      currentView:  'home'
    };
    expect(leaveHome()).to.deep.equal(leaveHomeACTION);
  });


  it('should return enterAbout action object', () => {
    const enterAboutACTION = {
      type:         'ENTER_ABOUT_VIEW',
      currentView:  'about'
    };
    expect(enterAbout()).to.deep.equal(enterAboutACTION);
  });

  it('should return leaveAbout action object', () => {
    const leaveAboutACTION = {
      type:         'LEAVE_ABOUT_VIEW',
      currentView:  'about'
    };
    expect(leaveAbout()).to.deep.equal(leaveAboutACTION);
  });

  it('should return enterLogin action object', () => {
    const enterLoginACTION = {
      type:         'ENTER_LOGIN_VIEW',
      currentView:  'login'
    };
    expect(enterLogin()).to.deep.equal(enterLoginACTION);
  });

  it('should return leaveLogin action object', () => {
    const leaveLoginACTION = {
      type:         'LEAVE_LOGIN_VIEW',
      currentView:  'login'
    };
    expect(leaveLogin()).to.deep.equal(leaveLoginACTION);
  });

  it('should return enterRegister action object', () => {
    const enterRegisterACTION = {
      type:         'ENTER_REGISTER_VIEW',
      currentView:  'register'
    };
    expect(enterRegister()).to.deep.equal(enterRegisterACTION);
  });

  it('should return leaveRegister action object', () => {
    const leaveRegisterACTION = {
      type:         'LEAVE_REGISTER_VIEW',
      currentView:  'register'
    };
    expect(leaveRegister()).to.deep.equal(leaveRegisterACTION);
  });

  it('should return enterProtected action object', () => {
    const enterProtectedACTION = {
      type:         'ENTER_PROTECTED_VIEW',
      currentView:  'protected'
    };
    expect(enterProtected()).to.deep.equal(enterProtectedACTION);
  });

  it('should return leaveProtected action object', () => {
    const leaveProtectedACTION = {
      type:         'LEAVE_PROTECTED_VIEW',
      currentView:  'protected'
    };
    expect(leaveProtected()).to.deep.equal(leaveProtectedACTION);
  });
});
