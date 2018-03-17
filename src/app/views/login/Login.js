// @flow

// #region imports
import React, { PureComponent } from 'react';
// import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { ErrorAlert } from '../../components';
import * as UserAuthTypes from '../../redux/modules/userAuth.types';
import { type Match, type Location, type RouterHistory } from 'react-router';
// import styles from './login.scss';
// #endregion

// #region flow types
export type LoginUserPayload = {
  user: {
    username: string,
    password: string,
  },
};

export type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,

  // views props:
  currentView: string,
  enterLogin: () => any,
  leaveLogin: () => any,

  // user Auth props:
  userIsAuthenticated: boolean,
  mutationLoading: boolean,
  receivedUserLoggedIn: UserAuthTypes.ReceivedUserLoggedIn,
  errorUserLoggedIn: UserAuthTypes.ErrorUserLoggedIn,
  resetLogError: UserAuthTypes.ResetLogError,
  setLoadingStateForUserLogin: UserAuthTypes.SetLoadingStateForUserLogin,
  unsetLoadingStateForUserLogin: UserAuthTypes.UnsetLoadingStateForUserLogin,

  // errors:
  error: any,

  // grpahql loginUser mutation
  loginUser: (user: LoginUserPayload) => Promise<any>,

  ...any,
};

export type State = {
  email: string,
  password: string,

  ...any,
};
// #endregion

// #region constants
// IMPORTANT: we need to bind classnames to CSSModule generated classes:
// const cx = classnames.bind(styles);
// #endregion

class Login extends PureComponent<Props, State> {
  state = {
    email: '',
    password: '',
  };

  // #region component lifecycle
  componentDidMount() {
    const { enterLogin } = this.props;
    enterLogin();
  }

  componentWillUnmount() {
    const { leaveLogin } = this.props;
    leaveLogin();
  }

  render() {
    const { email, password } = this.state;
    const { mutationLoading, error } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <form className="form-horizontal" noValidate>
              <fieldset>
                <legend>Login</legend>
                <div className="form-group">
                  <label
                    htmlFor="inputEmail"
                    className="col-lg-2 control-label"
                  >
                    Email
                  </label>
                  <div className="col-lg-10">
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail"
                      placeholder="Email"
                      // autoComplete="nofill"
                      // role="presentation"
                      value={email}
                      onChange={this.handlesOnEmailChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="inputPassword"
                    className="col-lg-2 control-label"
                  >
                    Password
                  </label>
                  <div className="col-lg-10">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="Password"
                      value={password}
                      onChange={this.handlesOnPasswordChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-lg-10 col-lg-offset-2">
                    <Link className="btn btn-default" to={'/'}>
                      Cancel
                    </Link>
                    <button
                      className="btn btn-primary loginButton"
                      disabled={mutationLoading}
                      onClick={this.handlesOnLogin}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </fieldset>
            </form>
            <ErrorAlert
              showAlert={!!error}
              errorTitle={'Error'}
              errorMessage={error ? error.message : ''}
              onClose={this.closeError}
            />
          </div>
        </div>
      </div>
    );
  }
  // #endregion

  handlesOnEmailChange = event => {
    event.preventDefault();
    // should add some validator before setState in real use cases
    this.setState({ email: event.target.value });
  };

  handlesOnPasswordChange = event => {
    event.preventDefault();
    // should add some validator before setState in real use cases
    this.setState({ password: event.target.value });
  };

  handlesOnLogin = async event => {
    event.preventDefault();
    const { loginUser, history } = this.props;

    const { email, password } = this.state;

    const variables = {
      user: {
        username: email,
        password: password,
      },
    };

    try {
      await loginUser({ variables });
      history.push({ pathname: '/protected' });
    } catch (error) {
      console.log('login went wrong..., error: ', error);
    }
  };

  closeError = event => {
    event.preventDefault();
    const { resetLogError } = this.props;
    resetLogError();
  };
}

export default Login;
