// @flow

// #region imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import compose from 'recompose/compose';
import * as viewsActions from '../../redux/modules/views';
import * as userAuthActions from '../../redux/modules/userAuth';
import Login from './Login';
import withEnterAnimation from '../../hoc/withEnterAnimation';
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
      ...viewsActions,

      // userAuth actions:
      ...userAuthActions,
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
      ownProps.setLoadingStateForUserLogin();
      try {
        const payload = { variables: { user } };
        const { data: { loginUser } } = await mutate(payload);
        ownProps.receivedUserLoggedIn(loginUser.token, loginUser.user);
        ownProps.unsetLoadingStateForUserLogin();
        return Promise.resolve();
      } catch (error) {
        ownProps.errorUserLoggedIn(error);
        ownProps.unsetLoadingStateForUserLogin();
        return Promise.reject();
      }
    },
  }),
};
// #endregion

// #endregion

export default compose(
  withEnterAnimation(),
  connect(mapStateToProps, mapDispatchToProps),
  graphql(logUserMutation, logUserMutationOptions),
)(Login);
