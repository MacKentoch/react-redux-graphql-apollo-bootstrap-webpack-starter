/* eslint no-unused-vars:0 */
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as viewsActions      from '../../redux/modules/views';
import * as userAuthActions   from '../../redux/modules/userAuth';
import { Login }              from '../../views';
import gql                    from 'graphql-tag';
import { graphql }            from 'react-apollo';



/* -----------------------------------------
  GraphQL - Apollo client
 ------------------------------------------*/

const CurrentUser = gql`
 query GetUser ($user: ID!) {
   getUser (id: $user) {
     id
     username
     createdAt
     modifiedAt
     lastLogin
   }
   getRole(id: $user) {
     name
   }
}
`;

const logUser = gql`
  mutation LoginUser($user: LoginUserInput!) {
    loginUser(input: $user) {
      token
    }
  }
`;

// 1- add queries:
const LoginWithQuery = graphql(
  CurrentUser,
  {
    options: {
      variables: {
        user: 'VXNlcjox'
      }
    },
    name: 'getCurrentUser',
    props: ({
      ownProps,
      getCurrentUser: {
        loading,
        getUser,
        getRole,
        refetch
      }
    }) => ({
      userLoading: loading,
      user: {...getUser, ...getRole},
      refetchUser: refetch
    })
  }
)(Login);

// 2- add mutation "logUser":
const LoginWithMutation = graphql(
  logUser,
  {
    name: 'logUserMutation',
    props: ({ ownProps, logUserMutation }) => ({
      loginUser(user) {
        ownProps.setMutationLoading();

        return logUserMutation(user)
          .then(
            ({data: {loginUser}}) => {
              ownProps.onUserLoggedIn(loginUser.token);
              ownProps.unsetMutationLoading();
              return Promise.resolve();
            }
          )
          .catch(
            ({data: {error}})=> {
              ownProps.onUserRegisterError(error);
              ownProps.unsetMutationLoading();
              return Promise.reject();
            }
          );
      }
    })
  }
)(LoginWithQuery);


/* -----------------------------------------
  Redux
 ------------------------------------------*/

const mapStateToProps = (state) => {
  return {
    // views props:
    currentView:  state.views.currentView,
    // user Auth props:
    userIsAuthenticated: state.userAuth.isAuthenticated,
    mutationLoading: state.userAuth.mutationLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      // views actions:
      enterLogin: viewsActions.enterLogin,
      leaveLogin: viewsActions.leaveLogin,

      // userAuth actions:
      onUserLoggedIn: userAuthActions.receivedUserLoggedIn,
      onUserLogError: userAuthActions.errorUserLoggedIn,
      setMutationLoading: userAuthActions.setLoadingStateForUserLogin,
      unsetMutationLoading: userAuthActions.unsetLoadingStateForUserLogin
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginWithMutation);
