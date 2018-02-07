// @flow

// #region imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as viewsActions from '../../redux/modules/views';
import { Protected } from '../../views';
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

export default connect(mapStateToProps, mapDispatchToProps)(Protected);
