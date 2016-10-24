import React, {
  Component,
  PropTypes
}                             from 'react';
import {
  NavigationBar,
  BackToTop
}                             from '../../components';
import navigationModel        from '../../models/navigation.json';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as viewsActions      from '../../redux/modules/views';
// import * as userAuthActions   from '../../redux/modules/userAuth';

class App extends Component {

  state = {
    navModel : navigationModel
  };

  render() {
    const { navModel } = this.state;
    const { children, userIsAuthenticated } = this.props;
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
          {children}
        </div>
        <BackToTop
          minScrollY={40}
          scrollTo={'appContainer'}
        />
      </div>
    );
  }

  handleLeftNavItemClick = (event, viewName) => {
    // something to do here?
  }

  handleRightNavItemClick = (event, viewName) => {
    // something to do here?
  }
}

// statics :
App.propTypes = {
  children:   PropTypes.node,
  history:    PropTypes.object,
  location:   PropTypes.object,
  actions:    PropTypes.object,

  userIsAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    currentView:  state,

    userIsAuthenticated: state.userAuth.isAuthenticated
  };
};

// "bindActionCreators" use-case is to pass dispatch to "store non aware children components" (but I feel like it is a good habbit to use it everytime)
const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        ...viewsActions
      },
      dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
