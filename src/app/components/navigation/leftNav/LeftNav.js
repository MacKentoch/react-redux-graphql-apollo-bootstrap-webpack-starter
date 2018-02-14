// @flow

// #region imports
import React from 'react';
import LeftNavButton from './leftNavButton/LeftNavButton';
import * as CTypes from './types';
// #endregion

const LeftNav = ({ leftLinks, onLeftNavButtonClick }: CTypes.Props) => (
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
