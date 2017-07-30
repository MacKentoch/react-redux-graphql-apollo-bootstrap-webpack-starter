// @flow weak

import React              from 'react';
import PropTypes          from 'prop-types';
import Humburger          from './humburger/Humburger';
import LeftNav            from './leftNav/LeftNav';
import RightNav           from './rightNav/RightNav';

const NavigationBar = ({
  brand,
  navModel,
  handleLeftNavItemClick,
  handleRightNavItemClick,
  userIsAuthenticated
}) => {
  return (
    <nav className="navbar navbar-default">
      <div className="containersCustom">
        <div className="navbar-header">
          {
            <Humburger />
          }
          <a className="navbar-brand">
            {brand}
          </a>
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1">
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

NavigationBar.propTypes = {
  brand:                    PropTypes.string,
  userIsAuthenticated:      PropTypes.bool.isRequired,
  handleLeftNavItemClick:   PropTypes.func,
  handleRightNavItemClick:  PropTypes.func,
  navModel:                 PropTypes.shape({
    leftLinks:  PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        link : PropTypes.string.isRequired
      })
    ).isRequired,
    rightLinks:  PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        link : PropTypes.string.isRequired
      })
    ).isRequired
  })
};

NavigationBar.defaultProps  = {
  brand  : 'brand'
};

export default NavigationBar;
