// @flow weak

import React, {
  Component
}                             from 'react';
import PropTypes              from 'prop-types';
import {
  NavigationBar,
  BackToTop
}                             from '../../components';
import navigationModel        from '../../models/navigation.json';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as viewsActions      from '../../redux/modules/views';
import * as userAuthActions   from '../../redux/modules/userAuth';
import MainRoutes             from '../../routes/MainRoutes';
import {
  withRouter
}                             from 'react-router-dom';

class App extends Component {
  static propTypes = {
    // react-router 4:
    match:    PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history:  PropTypes.object.isRequired,

    // userAuth
    userIsAuthenticated: PropTypes.bool.isRequired
  }

  state = {
    navModel : navigationModel
  };

  componentDidMount() {
    const {
      actions: {
        checkIfUserIsAuthenticated
      }
    } = this.props;

    checkIfUserIsAuthenticated();
  }

  render() {
    const { navModel } = this.state;

    const {
      children,
      userIsAuthenticated
    } = this.props;


    return (
      <div id="appContainer">
        <NavigationBar
          brand={navModel.brand}
          navModel={navModel}
          userIsAuthenticated={userIsAuthenticated}
          handleLeftNavItemClick={this.handleLeftNavItemClick}
          handleRightNavItemClick={this.handleRightNavItemClick}
        />
      <h1>
      </h1>
        <div className="container-fluid">
          <MainRoutes />
        </div>
        <BackToTop
          minScrollY={40}
          scrollTo={'appContainer'}
        />
      </div>
    );
  }

  handleLeftNavItemClick = (event, viewName) => {
    if (viewName === 'logout') {
      const {
        actions: {
          setUserLogout
        }
      } = this.props;
      setUserLogout();
    }
  }

  handleRightNavItemClick = (event, viewName) => {
    if (viewName === 'logout') {
      const {
        actions: {
          setUserLogout
        }
      } = this.props;
      setUserLogout();
    }
  }
}


const mapStateToProps = (state) => {
  return {
    // userAuth:
    userIsAuthenticated: state.userAuth.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        ...viewsActions,
        ...userAuthActions
      },
      dispatch)
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
