// @flow

// #region imports
import React from 'react';
import RightNavButton from './rightNavButton/RightNavButton';
// #endregion

// #region flow types
export type Props = {
  rightLinks: Array<{
    link: string,
    label: string,
    view: string,
    showWhenUserAuth: boolean,
    alwaysShows: boolean,
    btnLink: { showWhenUserAuth: boolean, alwaysShows: boolean },
  }>,
  onRightNavButtonClick: (event: SyntheticEvent<>, viewName: string) => any,
  userIsAuthenticated: boolean,
  ...any,
};
// #endregion

const RightNav = ({
  rightLinks,
  onRightNavButtonClick,
  userIsAuthenticated,
}: Props) => (
  <ul className="nav navbar-nav navbar-right">
    {userIsAuthenticated
      ? rightLinks
          .filter(({ showWhenUserAuth }) => showWhenUserAuth === true)
          .map(({ showWhenUserAuth, link, view, label }, index) => {
            return (
              <RightNavButton
                key={index}
                link={link}
                label={label}
                viewName={view}
                onClick={onRightNavButtonClick}
              />
            );
          })
      : rightLinks
          .filter(
            ({ showWhenUserAuth, alwaysShows }) =>
              showWhenUserAuth === false || alwaysShows === true,
          )
          .map(({ showWhenUserAuth, link, view, label }, index) => {
            return (
              <RightNavButton
                key={index}
                link={link}
                label={label}
                viewName={view}
                onClick={onRightNavButtonClick}
              />
            );
          })}
  </ul>
);

// #region static props
RightNav.displayName = 'RightNav';
// #endregion

export default RightNav;
