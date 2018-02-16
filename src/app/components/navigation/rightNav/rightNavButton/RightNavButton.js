// @flow

// #region imports
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import * as CTypes from './types';
// #endregion

class RightNavButton extends PureComponent<CTypes.Props, CTypes.State> {
  render() {
    const { link, label } = this.props;

    return (
      <li>
        <Link to={link} onClick={this.handleRightNavItemClick}>
          {label}
        </Link>
      </li>
    );
  }

  handleRightNavItemClick = event => {
    const { onClick, viewName } = this.props;
    onClick(event, viewName);
  };
}

export default RightNavButton;
