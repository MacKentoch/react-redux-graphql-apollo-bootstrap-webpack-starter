// @flow

import userAuthReducer from '../../../src/front/redux/modules/userAuth';
import * as userAuthActions from '../../../src/front/redux/modules/userAuth';

describe('userAuth reducer', () => {
  it('should return default state', () => {
    const expectedState = { type: 'NOTHING' };
    expect(userAuthReducer(null)).toEqual(expectedState);
  });
});
