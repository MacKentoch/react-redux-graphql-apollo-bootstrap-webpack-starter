import React, {
  Component,
  PropTypes
}                     from 'react';
import cx             from 'classnames';
import shallowCompare from 'react-addons-shallow-compare';
import { Link }       from 'react-router';
import { ErrorAlert } from '../../components';

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

  // componentWillReceiveProps(newProps) {
  //   const { user: { username } } = newProps;
  //
  //   if (username &&
  //       username.length > 0 &&
  //       this.props.user.username !== username) {
  //     this.setState({email: username});
  //   }
  // }

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
    const {
      mutationLoading,
      error
    } = this.props;

    return(
      <div className={
        cx({
          'animatedViews': animated,
          'view-enter': viewEntersAnim
        })}>
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <ErrorAlert
              showAlert={!!error}
              errorTitle={'Error'}
              errorMessage={error ? error.message : ''}
              onClose={this.closeError}
            />
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
                      // autoComplete="nofill"
                      // role="presentation"
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
    const { router } = this.context;

    const variables = {
      user: {
        username: email,
        password: password
      }
    };

    loginUser({variables})
      .then(
        () => router.push({ pathname: '/protected' })
      )
      .catch(
        () => console.log('login went wrong...')
      );
  }

  closeError = (event) => {
    event.preventDefault();
    const { resetError } = this.props;
    resetError();
  }
}

Login.propTypes= {
  // views props:
  currentView:  PropTypes.string.isRequired,
  enterLogin:    PropTypes.func.isRequired,
  leaveLogin:    PropTypes.func.isRequired,
  // apollo props:
  user: PropTypes.shape({
    username: PropTypes.string
  }),

  // auth props:
  userIsAuthenticated: PropTypes.bool.isRequired,
  mutationLoading: PropTypes.bool.isRequired,
  error: PropTypes.object,

  // apollo actions
  loginUser: PropTypes.func.isRequired,

  // redux actions
  onUserLoggedIn: PropTypes.func.isRequired,
  resetError: PropTypes.func.isRequired
};

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Login;
