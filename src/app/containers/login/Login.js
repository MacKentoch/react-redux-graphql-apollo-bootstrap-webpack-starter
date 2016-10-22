import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as viewsActions      from '../../redux/modules/views';
import { Login }              from '../../views';


const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      enterLogin: viewsActions.enterLogin,
      leaveLogin: viewsActions.leaveLogin
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
)(Login);
