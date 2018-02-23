// @flow

// #region imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import compose from 'recompose/compose';
import * as viewsActions from '../../redux/modules/views';
import * as userAuthActions from '../../redux/modules/userAuth';
import Register from './Register';
import withEnterAnimation from '../../hoc/withEnterAnimation';
// #endregion

// #region  Redux
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

// #region GraphQL - Apollo client

// #region create user mutation
const createUserMutation = gql`
  mutation CreateUser($user: CreateUserInput!) {
    createUser(input: $user) {
      token
    }
  }
`;

const createUserMutationOptions = {
  props: ({
    ownProps,
    mutate,
  }: {
    ownProps: CTypes.Props,
    mutate: (...any) => any,
  }) => ({
    async registerUser(user) {
      ownProps.setLoadingStateForUserRegister();

      try {
        const payload = { variables: { ...user } };
        const { data: { createUser: { token } } } = await mutate(payload);
        ownProps.receivedUserRegister(token, user);
        ownProps.unsetLoadingStateForUserRegister();
        return Promise.resolve();
      } catch (error) {
        ownProps.errorUserRegister(error);
        ownProps.unsetLoadingStateForUserRegister();
        return Promise.reject(error);
      }
    },
  }),
};
// #endregion

// #endregion

export default compose(
  withEnterAnimation(),
  connect(mapStateToProps, mapDispatchToProps),
  graphql(createUserMutation, createUserMutationOptions),
)(Register);
