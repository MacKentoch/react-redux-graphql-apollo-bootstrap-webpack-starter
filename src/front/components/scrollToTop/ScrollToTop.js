// @flow

// #region imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
// #endregion

// #region flow types
export type State = { ...any };
export type Props = {
  match: any,
  location: any,
  history: any,

  children: React$Node,
};
// #endregion

class ScrollToTop extends Component<Props, State> {
  static propTypes = {
    // react-router 4:
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,

    children: PropTypes.node,
  };

  componentDidUpdate(prevProps) {
    if (window) {
      const { location: prevLocation } = prevProps;
      const { location: nextLocation } = this.props;

      if (prevLocation !== nextLocation) {
        window.scrollTo(0, 0);
      }
    }
  }

  render() {
    const { children } = this.props;

    return <div>{children}</div>;
  }
}

export default withRouter(ScrollToTop);
