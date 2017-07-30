// @flow weak

import React                from 'react';
import PropTypes            from 'prop-types';
import RightNavButton       from './rightNavButton/RightNavButton';

const RightNav = ({
  rightLinks,
  onRightNavButtonClick,
  userIsAuthenticated
}) => (
  <ul className="nav navbar-nav navbar-right">
    {
      userIsAuthenticated
      ? rightLinks
        .filter(btnLink => btnLink.showWhenUserAuth === true)
        .map(
          (aLinkBtn, index) => {
            return (
                <RightNavButton
                  key={index}
                  link={aLinkBtn.link}
                  label={aLinkBtn.label}
                  viewName={aLinkBtn.view}
                  onClick={onRightNavButtonClick}
                />
              );
          }
        )
      : rightLinks
        .filter(btnLink => (
          (btnLink.showWhenUserAuth === false) || (btnLink.alwaysShows === true))
        )
        .map(
          (aLinkBtn, index) => {
            return (
                <RightNavButton
                  key={index}
                  link={aLinkBtn.link}
                  label={aLinkBtn.label}
                  viewName={aLinkBtn.view}
                  onClick={onRightNavButtonClick}
                />
              );
          }
        )
    }
  </ul>
);

RightNav.propTypes = {
  rightLinks: PropTypes.arrayOf(
    PropTypes.shape({
      link:     PropTypes.string,
      label:    PropTypes.string,
      viewName: PropTypes.string
    })
  ),
  onRightNavButtonClick: PropTypes.func,
  userIsAuthenticated:   PropTypes.bool.isRequired
};

export default RightNav;
