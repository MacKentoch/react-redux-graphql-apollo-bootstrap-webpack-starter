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
    viewName: string,
    btnLink: { showWhenUserAuth: boolean, alwaysShows: boolean },
  }>,
  onRightNavButtonClick: (event: SyntheticEvent<>, viewName) => any,
  userIsAuthenticated: boolean,
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
          .filter(btnLink => btnLink.showWhenUserAuth === true)
          .map((aLinkBtn, index) => {
            return (
              <RightNavButton
                key={index}
                link={aLinkBtn.link}
                label={aLinkBtn.label}
                viewName={aLinkBtn.view}
                onClick={onRightNavButtonClick}
              />
            );
          })
      : rightLinks
          .filter(
            btnLink =>
              btnLink.showWhenUserAuth === false ||
              btnLink.alwaysShows === true,
          )
          .map((aLinkBtn, index) => {
            return (
              <RightNavButton
                key={index}
                link={aLinkBtn.link}
                label={aLinkBtn.label}
                viewName={aLinkBtn.view}
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
