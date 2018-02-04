// @flow

// #region imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import compose from 'recompose/compose';
import * as viewsActions from '../../redux/modules/views';
import { Home } from '../../views';

// #endregion

// #region Redux
const mapStateToProps = state => {
  return {
    currentView: state.views.currentView,
    userAuth: state.userAuth,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ ...viewsActions }, dispatch);
};
// #endregion

// #region  GraphQL - Apollo client

// #region getUser query
const getUserQuery = gql`
  query GetUser($user: ID!) {
    getUser(id: $user) {
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

const getUserQueryOptions = {
  options: ({ userAuth }) => ({
    variables: {
      user: userAuth.id ? userAuth.id : '',
    },
  }),
  name: 'getCurrentUser',
  props: ({
    ownProps,
    getCurrentUser: { loading, getUser, getRole, refetch },
  }) => {
    return {
      userLoading: loading,
      user: { ...getUser, ...getRole },
      refetchUser: refetch,
    };
  },
};
// #endregion

// #endregion

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(getUserQuery, getUserQueryOptions),
)(Home);
