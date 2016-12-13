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

const logUser = gql`
  mutation LoginUser($user: LoginUserInput!) {
    loginUser(input: $user) {
      token,
      user {
        id,
        username,
        createdAt,
        modifiedAt,
        lastLogin
      }
    }
  }
`;

// 1- add queries:

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
            (
              {
                data: {
                  loginUser
                }
              }
            ) => {
              ownProps.onUserLoggedIn(loginUser.token, loginUser.user);
              ownProps.unsetMutationLoading();
              return Promise.resolve();
            }
          )
          .catch(
            (error)=> {
              ownProps.onUserLogError(error);
              ownProps.unsetMutationLoading();
              return Promise.reject();
            }
          );
      }
    })
  }
)(Login);


/* -----------------------------------------
  Redux
 ------------------------------------------*/

const mapStateToProps = (state) => {
  return {
    // views props:
    currentView:  state.views.currentView,
    // user Auth props:
    userIsAuthenticated: state.userAuth.isAuthenticated,
    mutationLoading: state.userAuth.mutationLoading,
    // errors:
    error: state.userAuth.error
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
      unsetMutationLoading: userAuthActions.unsetLoadingStateForUserLogin,
      resetError: userAuthActions.resetLogError
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginWithMutation);
