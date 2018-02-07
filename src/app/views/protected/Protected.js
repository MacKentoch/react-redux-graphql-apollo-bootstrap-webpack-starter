// @flow

// #region imports
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './protected.scss';
// #endregion

// #region flow types
type Props = any;
type State = any;
// #endregion

// #region constants
// IMPORTANT: we need to bind classnames to CSSModule generated classes:
const cx = classnames.bind(styles);
// #endregion

class Protected extends PureComponent<Props, State> {
  static propTypes = {
    // react-router 4:
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,

    // views
    currentView: PropTypes.string.isRequired,
    enterProtected: PropTypes.func.isRequired,
    leaveProtected: PropTypes.func.isRequired,
  };

  state = {
    viewEntersAnim: true,
  };

  // #region lifecycle
  componentDidMount() {
    const { enterProtected } = this.props;
    enterProtected();
  }

  componentWillUnmount() {
    const { leaveProtected } = this.props;
    leaveProtected();
  }

  render() {
    const { viewEntersAnim } = this.state;
    return (
      <div className={cx({ 'view-enter': viewEntersAnim })}>
        <h1 className="text-danger">Here is a protected view!</h1>
        <h2 className="text-danger">
          You've just logged in to be able to enter this view.
        </h2>
      </div>
    );
  }
  // #endregion
}

export default Protected;
