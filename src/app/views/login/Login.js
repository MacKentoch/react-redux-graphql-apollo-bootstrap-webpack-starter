// @flow weak

import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';
import cx             from 'classnames';
import { Link }       from 'react-router-dom';
import { ErrorAlert } from '../../components';

class Login extends PureComponent {
  static propTypes= {
    // react-router 4:
    match:    PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history:  PropTypes.object.isRequired,

    // views props:
    currentView: PropTypes.string.isRequired,
    enterLogin:  PropTypes.func.isRequired,
    leaveLogin:  PropTypes.func.isRequired,

    // apollo props:
    user: PropTypes.shape({
      username: PropTypes.string
    }),

    // auth props:
    userIsAuthenticated: PropTypes.bool.isRequired,
    mutationLoading:     PropTypes.bool.isRequired,
    error:               PropTypes.object,

    // apollo actions
    loginUser: PropTypes.func.isRequired,

    // redux actions
    onUserLoggedIn: PropTypes.func.isRequired,
    resetError:     PropTypes.func.isRequired
  };

  state = {
    viewEntersAnim: true,

    email:          '',
    password:       ''
  };

  componentDidMount() {
    const { enterLogin } = this.props;
    enterLogin();
  }

  componentWillUnmount() {
    const { leaveLogin } = this.props;
    leaveLogin();
  }

  render() {
    const {
      viewEntersAnim,
      email,
      password
    } = this.state;
    const {
      mutationLoading,
      error
    } = this.props;

    return (
      <div className={cx({ "view-enter": viewEntersAnim })}>
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <form
              className="form-horizontal"
              noValidate>
              <fieldset>
                <legend>
                  Login
                </legend>
                <div className="form-group">
                  <label
                    htmlFor="inputEmail"
                    className="col-lg-2 control-label">
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
                    className="col-lg-2 control-label">
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
                    <Link
                      className="btn btn-default"
                      to={'/'}>
                      Cancel
                    </Link>
                    <button
                      className="btn btn-primary login-button"
                      disabled={mutationLoading}
                      onClick={this.handlesOnLogin}>
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

  handlesOnEmailChange = (event) => {
    event.preventDefault();
    // should add some validator before setState in real use cases
    this.setState({ email: event.target.value });
  }

  handlesOnPasswordChange = (event) => {
    event.preventDefault();
    // should add some validator before setState in real use cases
    this.setState({ password: event.target.value });
  }

  handlesOnLogin = async (event) => {
    event.preventDefault();
    const {
      loginUser,
      history
    } = this.props;

    const {
      email,
      password
    } = this.state;

    const variables = {
      user: {
        username: email,
        password: password
      }
    };

    try {
      await loginUser({variables});
      history.push({ pathname: '/protected' });
    } catch (error) {
      console.log('login went wrong..., error: ', error);
    }
  }

  closeError = (event) => {
    event.preventDefault();
    const { resetError } = this.props;
    resetError();
  }
}

export default Login;
