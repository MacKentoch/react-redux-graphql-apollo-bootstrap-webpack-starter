// @flow

// #region imports
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './home.scss';
// #endregion

// #region flow types
type Props = any;
type State = any;
// #endregion

// #region constants
// IMPORTANT: we need to bind classnames to CSSModule generated classes:
const cx = classnames.bind(styles);
// #endregion

class Home extends PureComponent<Props, State> {
  static propTypes = {
    // react-router 4:
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    // view props:
    currentView: PropTypes.string.isRequired,
    // view actions:
    enterHome: PropTypes.func.isRequired,
    leaveHome: PropTypes.func.isRequired,
  };

  // #region lifecycle
  componentDidMount() {
    const { enterHome } = this.props;
    enterHome();
  }

  componentWillUnmount() {
    const { leaveHome } = this.props;
    leaveHome();
  }

  render() {
    return (
      <div key="homeView">
        <Jumbotron>
          <h1>Full ES2015 ReactJS + Redux + graphQL + Apollo + Bootstrap</h1>
          <h2>with Hot Reload!!!</h2>
          <h2>with React Router (SPA)</h2>
          <h1>Starter</h1>
          <p>
            <Link className="btn btn-success btn-lg" to={'/about'}>
              <i className="fa fa-info" />
              &nbsp; go to about
            </Link>
          </p>
        </Jumbotron>
      </div>
    );
  }
  // #endregion
}

export default Home;
