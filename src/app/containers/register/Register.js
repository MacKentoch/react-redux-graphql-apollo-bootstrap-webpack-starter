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


// 2- add mutation "CreateUser":
const RegisterWithCreatUserMutation = graphql(
  CreateUser,
  {
    name: 'createUserMutation',
    props: ({ ownProps, createUserMutation }) => ({
      registerUser(user) {
        return createUserMutation(user)
          .then(
            ({data: {createUser}}) => {
              ownProps.onUserRegisterSuccess(createUser.token);
              return Promise.resolve();
            }
          )
          .catch(
            ({data: {error}})=> {
              ownProps.onUserRegisterError(error);
              return Promise.reject();
            }
          );
      }
    })
  }
)(Register);


/* -----------------------------------------
  Redux
 ------------------------------------------*/
const mapStateToProps = (state) => {
  return {
    // views props:
    currentView:  state.views.currentView,
    // user Auth props:
    userIsAuthenticated: state.userAuth.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      // views actions:
      enterRegister: viewsActions.enterRegister,
      leaveRegister: viewsActions.leaveRegister,
      // userAuth actions:
      onUserRegisterSuccess: userAuthActions.receivedUserRegister,
      onUserRegisterError: userAuthActions.errorUserRegister
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterWithCreatUserMutation);
