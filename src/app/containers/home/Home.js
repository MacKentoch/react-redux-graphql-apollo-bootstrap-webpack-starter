import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as viewsActions      from '../../redux/modules/views';
import { Home }               from '../../views';

import gql                    from 'graphql-tag';
import { graphql }            from 'react-apollo';


/*
  GraphQL - Apollo client
 */

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
  mutation loginUser($user: LoginUserInput!) {
    loginUser(input: $user) {
      token
    }
  }
`;



// 1- add query
const HomeWithQuery = graphql(
  CurrentUser,
  {
    options: {
      variables: {
        user: 'VXNlcjox'
      }
    },
    name: 'getCurrentUser',
    props: ({ ownProps, getCurrentUser: { loading, getUser, refetch } }) => ({
      userLoading: loading,
      user: getUser,
      refetchUser: refetch
    })
  }
)(Home);

// 2- add mutations
const HomeWithMutation = graphql(
  logUser,
  {
    options: {
      variables: {
        user: {
          username: 'tets',
          password: 'test'
        }
      }
    },
    name: 'logUser'
  }
)(HomeWithQuery);

 /*
   Redux
  */
const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      enterHome: viewsActions.enterHome,
      leaveHome: viewsActions.leaveHome
    },
    dispatch
  );
};

/*
  without bindActionCreators:
 */
// const mapDispatchToProps = (dispatch) => {
//   return {
//     enterHome: () => dispatch(viewsActions.enterHome()),
//     leaveHome: () => dispatch(viewsActions.leaveHome())
//   };
// };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeWithMutation);
