// @flow

// #region imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import * as viewsActions from '../../redux/modules/views';
import { About } from '../../views';
// #endregion

// #region Redux
const mapStateToProps = state => {
  return {
    currentView: state.views.currentView,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ ...viewsActions }, dispatch);
};
// #endregion

// #region apollo client

// #endregion

export default connect(mapStateToProps, mapDispatchToProps)(About);
