// @flow weak

import React, {
  PureComponent
}                 from 'react';
import PropTypes  from 'prop-types';
import {
  Motion,
  spring,
  presets
}                 from 'react-motion';
import cx         from 'classnames';

class Alert extends PureComponent {
  static propTypes = {
    showAlert:    PropTypes.bool,
    errorTitle:   PropTypes.string,
    errorMessage: PropTypes.string,
    onClose:      PropTypes.func.isRequired,
    type:         PropTypes.oneOf(['warning', 'error'])
  };

  static defaultProps = {
    showAlert: false,
    type:      'warning'
  };

  render() {
    const {
      type,
      showAlert,
      errorTitle,
      errorMessage,
      onClose
    } = this.props;

    return (
      <Motion
        style={{
          interpolatedScale: spring(showAlert ? 1 : 0, presets.stiff)
        }}>
        {
          ({ interpolatedScale }) => (
            <div
              className={
                cx({
                  'alert':              true,
                  'alert-dismissible':  true,
                  'alert-danger':       type === 'error',
                  'alert-warning':      type === 'warning'
                })
              }
              style={{
                WebkitTransform:  `scale(${interpolatedScale})`,
                transform:        `scale(${interpolatedScale})`
              }}>
              <button
                type="button"
                className="close"
                onClick={onClose}>
                &times;
              </button>
              {
                errorTitle && errorTitle.length > 0 &&
                <strong>
                  {errorTitle}
                </strong>
              }
              {
                <p>
                  {errorMessage}
                </p>
              }
            </div>
          )
        }
      </Motion>
    );
  }
}

export default Alert;
