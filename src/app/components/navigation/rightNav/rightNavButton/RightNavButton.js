// @flow

// #region imports
import React, { PureComponent } from 'react';
import { type SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
// #endregion

// #region flow types
export type Props = {
  link: string,
  label: string,
  viewName: string,
  onClick: (event: SyntheticEvent<>, viewName: string) => any,
  ...any,
};

export type State = {
  ...any,
};
// #endregion

class RightNavButton extends PureComponent<Props, State> {
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
