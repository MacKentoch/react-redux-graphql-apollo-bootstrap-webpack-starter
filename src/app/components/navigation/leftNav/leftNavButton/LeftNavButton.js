// @flow

// #region imports
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import * as CTypes from './types';
// #endregion

class LeftNavButton extends PureComponent<CTypes.Props, CTypes.State> {
  // #region lifecycle
  render() {
    const { link, label } = this.props;

    return (
      <li>
        <Link to={link} onClick={this.handleLeftNavItemClick}>
          {label}
        </Link>
      </li>
    );
  }
  // #endregion

  // #region on Link click event
  handleLeftNavItemClick = (event: SyntheticEvent<>) => {
    const { onClick, viewName } = this.props;
    onClick(event, viewName);
  };
  // #endregion
}

export default LeftNavButton;
