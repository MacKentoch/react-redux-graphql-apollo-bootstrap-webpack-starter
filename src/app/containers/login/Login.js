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
     id
     name
     createdAt
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
    props: ({ _, getCurrentUser: { loading, getUser, getRole, refetch } }) => ({
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
    options: {
      variables: {
        user: {
          username: 'test',
          password: 'test'
        }
      }
    },
    name: 'logUser',
    props: ({ ownProps, logUser }) => ({
      loginUser() {
        return logUser()
          .then(result => ownProps.onUserLoggedIn(result.data.loginUser.token));
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

  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      // views actions:
      enterLogin: viewsActions.enterLogin,
      leaveLogin: viewsActions.leaveLogin,
      // userAuth actions:
      onUserLoggedIn: userAuthActions.receivedUserLoggedIn
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginWithMutation);
