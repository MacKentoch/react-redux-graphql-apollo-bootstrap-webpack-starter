// @flow

// #region imports
import React from 'react';
import LeftNavButton from './leftNavButton/LeftNavButton';
// #endregion

// #region flow types
export type NavItem = {
  link: string,
  label: string,
  viewName: string,
};

export type Props = {
  leftLinks: Array<NavItem>,
  onLeftNavButtonClick: () => {},

  ...any,
};
// #endregion

const LeftNav = ({ leftLinks, onLeftNavButtonClick }: Props) => (
  <ul className="nav navbar-nav">
    {leftLinks.map(({ link, label, viewName }, index) => {
      return (
        <LeftNavButton
          key={index}
          link={link}
          label={label}
          viewName={viewName}
          onClick={onLeftNavButtonClick}
        />
      );
    })}
  </ul>
);

// #region static props
LeftNav.displayName = 'LeftNav';
// #endregion

export default LeftNav;
