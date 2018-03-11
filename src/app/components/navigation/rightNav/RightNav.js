// @flow

// #region imports
import React, { SyntheticEvent } from 'react';
import PropTypes from 'prop-types';
import RightNavButton from './rightNavButton/RightNavButton';
// #endregion

// #region flow types
export type Props = {
  rightLinks: Array<{
    link: string,
    label: string,
    viewName: string,
    btnLink: {
      showWhenUserAuth: boolean,
      alwaysShows: boolean,
    },
  }>,
  onRightNavButtonClick: (event: SyntheticEvent<>) => any,
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
RightNav.propTypes = {
  rightLinks: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      label: PropTypes.string,
      viewName: PropTypes.string,
    }),
  ),
  onRightNavButtonClick: PropTypes.func,
  userIsAuthenticated: PropTypes.bool.isRequired,
};

RightNav.displayName = 'RightNav';
// #endregion

export default RightNav;
