// @flow weak

import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';
import cx             from 'classnames';

class Protected extends PureComponent {
  static propTypes= {
    // react-router 4:
    match:    PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history:  PropTypes.object.isRequired,

    // views
    currentView:    PropTypes.string.isRequired,
    enterProtected: PropTypes.func.isRequired,
    leaveProtected: PropTypes.func.isRequired
  };

  state = {
    viewEntersAnim: true
  };

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
    return(
      <div className={cx({ "view-enter": viewEntersAnim })}>
        <h1 className="text-danger">
          Here is a protected view!
        </h1>
        <h2 className="text-danger">
          You've just logged in to be able to enter this view.
        </h2>
      </div>
    );
  }
}

export default Protected;
