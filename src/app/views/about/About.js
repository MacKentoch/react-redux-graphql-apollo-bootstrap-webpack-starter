// @flow weak

import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';
import cx             from 'classnames';
import { Link }       from "react-router-dom";

class About extends PureComponent {
  static propTypes= {
    // react-router 4:
    match:    PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history:  PropTypes.object.isRequired,

    // views
    currentView:  PropTypes.string.isRequired,
    enterAbout:   PropTypes.func.isRequired,
    leaveAbout:   PropTypes.func.isRequired
  };

  state = {
    viewEntersAnim: true
  };

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
      <div className={cx({ "view-enter": viewEntersAnim })}>
        <h1>About</h1>
      </div>
    );
  }
}

export default About;
