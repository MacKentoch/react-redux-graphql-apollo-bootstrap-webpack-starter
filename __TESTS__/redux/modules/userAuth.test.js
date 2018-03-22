import userAuthReducer from '../../../src/app/redux/modules/userAuth';
import * as userAuthActions from '../../../src/app/redux/modules/userAuth';

describe('userAuth reducer', () => {
  it('should return default state', () => {
    const expectedState = {};
    expect(userAuthReducer(null)).toEqual(expectedState);
  });
});
