// @flow weak

import React      from 'react';
import PropTypes  from 'prop-types';

import {
  Motion,
  spring,
  presets
}                 from 'react-motion';


const ErrorAlert = ({
  showAlert,
  errorTitle,
  errorMessage,
  onClose
}) => (
  <Motion
    style={{
      interpolatedScale: spring(showAlert ? 1 : 0, presets.stiff)
    }}>
    {
      ({ interpolatedScale }) => (
        <div
          className="alert alert-dismissible alert-danger"
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


ErrorAlert.propTypes = {
  showAlert:    PropTypes.bool,
  errorTitle:   PropTypes.string,
  errorMessage: PropTypes.string,
  onClose:      PropTypes.func.isRequired
};

ErrorAlert.defaultProps = {
  showAlert: false
};

export default ErrorAlert;
