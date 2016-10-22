import React, {
  Component,
  PropTypes
}                     from 'react';
import cx             from 'classnames';
import shallowCompare from 'react-addons-shallow-compare';
import { Link }       from 'react-router';

class Register extends Component {

  state = {
    animated: true,
    viewEntersAnim: true,

    email: '',
    password: ''
  };

  componentDidMount() {
    const { enterRegister } = this.props;
    enterRegister();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    const { leaveRegister } = this.props;
    leaveRegister();
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
                  Register
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
                      className="btn btn-primary register-button"
                      onClick={this.handlesOnRegister}>
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

  handlesOnRegister = (event) => {
    event.preventDefault();
    // TODO: dispatch a login action here
  }
}

Register.propTypes= {
  currentView:    PropTypes.string.isRequired,
  enterRegister:  PropTypes.func.isRequired,
  leaveRegister:  PropTypes.func.isRequired
};

export default Register;
