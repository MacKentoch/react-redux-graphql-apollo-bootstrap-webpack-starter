// @flow

// #region imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import withEnterAnimation from '../../hoc/withEnterAnimation';
import * as viewsActions from '../../redux/modules/views';
import Protected from './Protected';
// #endregion

// #region Redux
const mapStateToProps = state => {
  return {
    currentView: state.views.currentView,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      ...viewsActions,
    },
    dispatch,
  );
};
// #endregion

export default compose(
  withEnterAnimation(),
  connect(mapStateToProps, mapDispatchToProps),
)(Protected);
