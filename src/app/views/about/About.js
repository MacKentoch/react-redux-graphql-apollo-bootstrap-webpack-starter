// @flow

// #region imports
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './about.scss';
// #endregion

// #region flow types
type Props = any;
type State = any;
// #endregion

// #region constants
// IMPORTANT: we need to bind classnames to CSSModule generated classes:
const cx = classnames.bind(styles);
// #endregion

class About extends PureComponent<Props, State> {
  static propTypes = {
    // react-router 4:
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,

    // views
    currentView: PropTypes.string.isRequired,
    enterAbout: PropTypes.func.isRequired,
    leaveAbout: PropTypes.func.isRequired,
  };

  state = {
    viewEntersAnim: true,
  };

  // #region lifecycle
  componentDidMount() {
    const { enterAbout } = this.props;
    enterAbout();
  }

  componentWillUnmount() {
    const { leaveAbout } = this.props;
    leaveAbout();
  }

  render() {
    const { viewEntersAnim } = this.state;

    return (
      <div className={cx({ 'view-enter': viewEntersAnim })}>
        <h1>About</h1>
      </div>
    );
  }
  // #endregion
}

export default About;
