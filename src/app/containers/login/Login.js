// @flow

// #region imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import * as viewsActions from '../../redux/modules/views';
import * as userAuthActions from '../../redux/modules/userAuth';
import { Login } from '../../views';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
// #endregion

// #region Redux
const mapStateToProps = state => {
  return {
    // views props:
    currentView: state.views.currentView,
    // user Auth props:
    userIsAuthenticated: state.userAuth.isAuthenticated,
    mutationLoading: state.userAuth.mutationLoading,
    // errors:
    error: state.userAuth.error,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      // views actions:
      enterLogin: viewsActions.enterLogin,
      leaveLogin: viewsActions.leaveLogin,

      // userAuth actions:
      onUserLoggedIn: userAuthActions.receivedUserLoggedIn,
      onUserLogError: userAuthActions.errorUserLoggedIn,
      setMutationLoading: userAuthActions.setLoadingStateForUserLogin,
      unsetMutationLoading: userAuthActions.unsetLoadingStateForUserLogin,
      resetError: userAuthActions.resetLogError,
    },
    dispatch,
  );
};
// #endregion

// #region  GraphQL - Apollo client

// #region login user muation
const logUserMutation = gql`
  mutation LoginUser($user: LoginUserInput!) {
    loginUser(input: $user) {
      token
      user {
        id
        username
        createdAt
        modifiedAt
        lastLogin
      }
    }
  }
`;

const logUserMutationOptions = {
  props: ({ ownProps, mutate }) => ({
    async loginUser(user) {
      ownProps.setMutationLoading();
      try {
        const payload = { variables: { user } };
        const { data: { loginUser } } = await mutate(payload);
        ownProps.onUserLoggedIn(loginUser.token, loginUser.user);
        ownProps.unsetMutationLoading();
        return Promise.resolve();
      } catch (error) {
        ownProps.onUserLogError(error);
        ownProps.unsetMutationLoading();
        return Promise.reject();
      }
    },
  }),
};
// #endregion

// #endregion

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(logUserMutation, logUserMutationOptions),
)(Login);
