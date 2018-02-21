// @flow

// #region imports
import React, { PureComponent } from 'react';
import { type Match, type Location, type RouterHistory } from 'react-router';
import Jumbotron from '../../components/jumbotron/Jumbotron';
// import classnames from 'classnames';
import { Link } from 'react-router-dom';
// import styles from './home.scss';
// #endregion

// #region flow types
export type UserProps = {
  id: number,
  username: string,
  createdAt: string | Date,
  modifiedAt: string | Date,
  lastLogin: string | Date,
};

export type RoleProps = { id: number, name: string, createdAt: string | Date };

export type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,

  // getUser Query
  userLoading: boolean,
  user: UserProps & RoleProps,
  refetchUser: () => any,

  // view props:
  currentView: string,

  // view actions:
  enterHome: () => any,
  leaveHome: () => any,

  ...any,
};
export type State = any;
// #endregion

// #region constants
// IMPORTANT: we need to bind classnames to CSSModule generated classes:
// const cx = classnames.bind(styles);
// #endregion

class Home extends PureComponent<Props, State> {
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
