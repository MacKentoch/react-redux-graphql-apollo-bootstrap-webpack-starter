// @flow

// #region imports
import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { type Match, type Location, type RouterHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as viewsActions from '../../redux/modules/views';
import * as userAuthActions from '../../redux/modules/userAuth';
import MainRoutes from '../../routes/MainRoutes';
import { NavigationBar, BackToTop } from '../../components';
import navigationModel from '../../models/navigation.json';
import registerServiceWorker from '../../services/sw/registerServiceWorker';
// #endregion

// #region flow types
type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,

  // userAuth
  userIsAuthenticated: boolean,
  ...any,
};

type State = {
  navModel: any,
};
// #endregion

class App extends PureComponent<Props, State> {
  state = {
    navModel: navigationModel,
  };

  componentDidMount() {
    const { actions: { checkIfUserIsAuthenticated } } = this.props;
    // register service worker (no worry about multiple attempts to register, browser will ignore when already registered)
    registerServiceWorker();
    checkIfUserIsAuthenticated();
  }

  render() {
    const { navModel } = this.state;
    const { userIsAuthenticated } = this.props;

    return (
      <div id="appContainer">
        <NavigationBar
          brand={navModel.brand}
          navModel={navModel}
          userIsAuthenticated={userIsAuthenticated}
          handleLeftNavItemClick={this.handleLeftNavItemClick}
          handleRightNavItemClick={this.handleRightNavItemClick}
        />
        <h1 />
        <div className="container-fluid">
          <MainRoutes />
        </div>
        <BackToTop minScrollY={40} scrollTo={'appContainer'} />
      </div>
    );
  }

  handleLeftNavItemClick = (event: SyntheticEvent<>, viewName: string) => {
    if (viewName === 'logout') {
      const { actions: { setUserLogout } } = this.props;
      setUserLogout();
    }
  };

  handleRightNavItemClick = (event: SyntheticEvent<>, viewName: string) => {
    if (viewName === 'logout') {
      const { actions: { setUserLogout } } = this.props;
      setUserLogout();
    }
  };
}

// #region redux connection

const mapStateToProps = state => {
  return {
    // userAuth:
    userIsAuthenticated: state.userAuth.isAuthenticated,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        ...viewsActions,
        ...userAuthActions,
      },
      dispatch,
    ),
  };
};

// #endregion

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
