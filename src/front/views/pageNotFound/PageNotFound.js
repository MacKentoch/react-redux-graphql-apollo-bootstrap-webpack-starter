// @flow

// #region imports
import React, { PureComponent } from 'react';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import { type Match, type Location, type RouterHistory } from 'react-router';
// #endregion

// #region flow types
type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,
  ...any,
};
type State = any;
// #endregion

class PageNotFound extends PureComponent<Props, State> {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Sorry this page does not exists...</h1>
        </Jumbotron>
      </div>
    );
  }
}

export default PageNotFound;
