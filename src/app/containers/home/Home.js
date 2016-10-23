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
    options: {
      variables: {
        user: 'VXNlcjox'
      }
    },
    name: 'getCurrentUser',
    props: ({ ownProps, getCurrentUser: { loading, getUser, getRole, refetch } }) => ({
      userLoading: loading,
      user: {...getUser, ...getRole},
      refetchUser: refetch
    })
  }
)(Home);


/* -----------------------------------------
  Redux
 ------------------------------------------*/

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeWithQuery);
