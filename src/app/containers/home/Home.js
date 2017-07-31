// @flow weak

import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as viewsActions      from '../../redux/modules/views';
import { Home }               from '../../views';
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

// 1- add queries:
const HomeWithQuery = graphql(
  CurrentUser,
  {
    options: ({ userAuth }) => {
      return {
        variables: {
          user: userAuth.id ? userAuth.id : ''
        }
      }
    },

    name: 'getCurrentUser',

    props: ({
      ownProps,
      getCurrentUser:
      {
        loading,
        getUser,
        getRole,
        refetch
      }
    }) => {
      // // TODO: find a better solution to dispatch redux action on query result to set 'state.userAuth.isAuthenticated'
      // setTimeout(
      //   () => ownProps.checkUserAuth(), 0
      // );
      return {
        userLoading: loading,
        user: {...getUser, ...getRole},
        refetchUser: refetch
      };
    }

  }
)(Home);


/* -----------------------------------------
  Redux
 ------------------------------------------*/

const mapStateToProps = (state) => {
  return {
    // view store:
    currentView:  state.views.currentView,
    // userAuth:
    userAuth:       state.userAuth
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      // views actions
      enterHome: viewsActions.enterHome,
      leaveHome: viewsActions.leaveHome
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeWithQuery);
