import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as viewsActions      from '../../redux/modules/views';
import * as userAuthActions   from '../../redux/modules/userAuth';
import { Register }           from '../../views';
import gql                    from 'graphql-tag';
import { graphql }            from 'react-apollo';


/* -----------------------------------------
  GraphQL - Apollo client
 ------------------------------------------*/

const CreateUser = gql`
mutation CreateUser ($user: CreateUserInput!) {
   createUser (input: $user) {
       changedUser {
           id
           username
       }
       token
   }
}
`;

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

// 1 - add mutation loginUser
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
              ownProps.onUserLoggedIn(loginUser.token, loginUser.user);
              ownProps.unsetMutationLoading();
              return Promise.resolve();
            }
          )
          .catch(
            ({errors})=> {
              ownProps.onUserRegisterError(errors);
              ownProps.unsetMutationLoading();
              return Promise.reject(errors);
            }
          );
      }
    })
  }
)(Register);


// 2- add mutation "CreateUser":
const RegisterWithCreatUserMutation = graphql(
  CreateUser,
  {
    name: 'createUserMutation',
    props: ({ ownProps, createUserMutation }) => ({
      registerUser(user) {
        ownProps.setMutationLoading();

        return createUserMutation(user)
          .then(
            ({data: {createUser: {changedUser: {id, username}}}}) => {
              ownProps.onUserRegisterSuccess(null, id, username);
              ownProps.unsetMutationLoading();
              return Promise.resolve();
            }
          )
          .catch(
            ({errors})=> {
              ownProps.onUserRegisterError(errors);
              ownProps.unsetMutationLoading();
              return Promise.reject(errors);
            }
          );
      }
    })
  }
)(LoginWithMutation);


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
      enterRegister: viewsActions.enterRegister,
      leaveRegister: viewsActions.leaveRegister,
      // userAuth actions:
      onUserLoggedIn: userAuthActions.receivedUserLoggedIn,
      onUserLogError: userAuthActions.errorUserLoggedIn,

      onUserRegisterSuccess: userAuthActions.receivedUserRegister,
      onUserRegisterError: userAuthActions.errorUserRegister,

      setMutationLoading: userAuthActions.setLoadingStateForUserRegister,
      unsetMutationLoading: userAuthActions.unsetLoadingStateForUserRegister
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterWithCreatUserMutation);
