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
    viewEntersAnim: true
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
    const { animated, viewEntersAnim } = this.state;
    return(
      <div
        key="homeView"
        className={cx({
          'animatedViews': animated,
          'view-enter': viewEntersAnim
        })}>
        <Jumbotron>
          <h1>
            TODO
          </h1>
          <h2>
            login view here
          </h2>

          <p>
            <Link
              className="btn btn-success btn-lg"
              to={'/about'}>
              <i className="fa fa-info"></i>
              &nbsp;
              go to about
            </Link>
          </p>
        </Jumbotron>
        <div className="row">
          <div className="col-md-12">

            <form className="form-horizontal">
              <fieldset>
                <legend>
                  login
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
                    />
                  </div>
                </div>
              </fieldset>
            </form>

          </div>
        </div>

      </div>
    );
  }
}

Login.propTypes= {
  currentView:  PropTypes.string.isRequired,
  enterLogin:    PropTypes.func.isRequired,
  leaveLogin:    PropTypes.func.isRequired
};

export default Login;
