// @flow

// #region imports
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import { type Match, type Location, type RouterHistory } from 'react-router';
// import classnames from 'classnames';
// import styles from './pageNotFound.scss';
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

// #region constants
// IMPORTANT: we need to bind classnames to CSSModule generated classes:
// const cx = classnames.bind(styles);
// #endregion

class PageNotFound extends PureComponent<Props, State> {
  static propTypes = {
    // react-router 4:
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

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
