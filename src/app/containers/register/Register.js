import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as viewsActions      from '../../redux/modules/views';
import { Register }              from '../../views';


const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      enterRegister: viewsActions.enterRegister,
      leaveRegister: viewsActions.leaveRegister
    },
    dispatch
  );
};

/*
  without bindActionCreators:
 */
// const mapDispatchToProps = (dispatch) => {
//   return {
//     enterRegister: () => dispatch(viewsActions.enterRegister()),
//     leaveRegister: () => dispatch(viewsActions.leaveRegister())
//   };
// };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
