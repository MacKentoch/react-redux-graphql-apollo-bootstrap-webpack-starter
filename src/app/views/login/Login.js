import React, {
  Component,
  PropTypes
}                     from 'react';
import {Jumbotron}    from '../../components';
import cx             from 'classnames';
import shallowCompare from 'react-addons-shallow-compare';
import { Link }       from 'react-router';

class Login extends Component {

  state = {
    animated: true,
    viewEntersAnim: true,

    email: '',
    password: ''
  };

  componentDidMount() {
    const { enterLogin } = this.props;
    enterLogin();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    const { leaveLogin } = this.props;
    leaveLogin();
  }

  render() {
    const {
      animated,
      viewEntersAnim,
      email,
      password
    } = this.state;
    return(
      <div className={
        cx({
          'animatedViews': animated,
          'view-enter': viewEntersAnim
        })}>
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
                      onClick={this.handlesOnLogin}>
                      Login
                    </button>
                  </div>
                </div>
              </fieldset>
            </form>

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

  handlesOnLogin = (event) => {
    event.preventDefault();
    const { loginUser } = this.props;
    const { email, password } = this.state;

    const variables = {
      user: {
        username: email,
        password: password
      }
    };

    loginUser({variables});
  }
}

Login.propTypes= {
  // views props:
  currentView:  PropTypes.string.isRequired,
  enterLogin:    PropTypes.func.isRequired,
  leaveLogin:    PropTypes.func.isRequired,

  // auth props:
  userIsAuthenticated: PropTypes.bool.isRequired,

  // apollo actions
  loginUser: PropTypes.func.isRequired,

  // redux actions
  onUserLoggedIn: PropTypes.func.isRequired
};

export default Login;
