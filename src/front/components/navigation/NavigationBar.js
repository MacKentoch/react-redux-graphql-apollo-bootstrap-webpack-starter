// @flow

// #region imports
import React from 'react';
import styled from 'styled-components';
import Humburger from './humburger/Humburger';
import LeftNav from './leftNav/LeftNav';
import RightNav from './rightNav/RightNav';
// #endregion

// #region flow types
export type Props = {
  brand?: string,
  userIsAuthenticated: boolean,
  handleLeftNavItemClick: (event: SyntheticEvent<>, viewName: string) => any,
  handleRightNavItemClick: (event: SyntheticEvent<>, viewName: string) => any,
  navModel: {
    leftLinks: Array<{
      label: string,
      link: string,
    }>,
    rightLinks: Array<{
      link: string,
      label: string,
      viewName: string,
      btnLink: { showWhenUserAuth: boolean, alwaysShows: boolean },
    }>,
  },
};
// #endregion

// #region styled components
const Container = styled.div`
  padding-left: 2%;
  padding-right: 2%;
`;
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
      <Container>
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
      </Container>
    </nav>
  );
};

NavigationBar.defaultProps = {
  brand: 'brand',
  userIsAuthenticated: false,
};

NavigationBar.displayName = 'NavigationBar';
// #endregion

export default NavigationBar;
