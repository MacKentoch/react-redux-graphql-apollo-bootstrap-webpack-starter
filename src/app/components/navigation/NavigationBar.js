// @flow

// #region imports
import React, { type SyntheticEvent } from 'react';
import PropTypes from 'prop-types';
import Humburger from './humburger/Humburger';
import LeftNav from './leftNav/LeftNav';
import RightNav from './rightNav/RightNav';
// #endregion

// #region flow types
export type Props = {
  brand?: string,
  userIsAuthenticated?: boolean,
  handleLeftNavItemClick: (event: SyntheticEvent<>, viewName: string) => any,
  handleRightNavItemClick: (event: SyntheticEvent<>, viewName: string) => any,
  navModel: {
    leftLinks: Array<{
      label: string,
      link: string,
    }>,
    rightLinks: Array<{
      label: string,
      link: string,
    }>,
  },
};
// #endregion

const NavigationBar = ({
  brand,
  navModel,
  handleLeftNavItemClick,
  handleRightNavItemClick,
  userIsAuthenticated,
}: Props) => {
  return (
    <nav className="navbar navbar-default">
      <div className="containersCustom">
        <div className="navbar-header">
          {<Humburger />}
          <a className="navbar-brand">{brand}</a>
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav">
            {
              <LeftNav
                leftLinks={navModel.leftLinks}
                onLeftNavButtonClick={handleLeftNavItemClick}
                userIsAuthenticated={userIsAuthenticated}
              />
            }
          </ul>
          <ul className="nav navbar-nav navbar-right">
            {
              <RightNav
                rightLinks={navModel.rightLinks}
                onRightNavButtonClick={handleRightNavItemClick}
                userIsAuthenticated={userIsAuthenticated}
              />
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

// #region static props
NavigationBar.propTypes = {
  brand: PropTypes.string,
  userIsAuthenticated: PropTypes.bool.isRequired,
  handleLeftNavItemClick: PropTypes.func,
  handleRightNavItemClick: PropTypes.func,
  navModel: PropTypes.shape({
    leftLinks: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      }),
    ).isRequired,
    rightLinks: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }),
};

NavigationBar.defaultProps = {
  brand: 'brand',
};

NavigationBar.displayName = 'NavigationBar';
// #endregion

export default NavigationBar;
