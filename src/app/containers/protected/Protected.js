import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as viewsActions      from '../../redux/modules/views';
import { Protected }          from '../../views';


const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      enterProtected: viewsActions.enterProtected,
      leaveProtected: viewsActions.leaveProtected
    },
    dispatch
  );
};

/*
  without bindActionCreators:
 */
// const mapDispatchToProps = (dispatch) => {
//   return {
//     enterProtected: () => dispatch(viewsActions.enterProtected()),
//     leaveProtected: () => dispatch(viewsActions.leaveProtected())
//   };
// };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Protected);
