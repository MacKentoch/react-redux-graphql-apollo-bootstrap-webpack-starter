import React, {
  PropTypes
}                 from 'react';
import {
  Motion,
  spring,
  presets
}                 from 'react-motion';


const ErrorAlert = ({ showAlert, errorTitle, errorMessage, onClose }) => (
  <Motion style={{scale: spring(showAlert ? 1 : 0, presets.stiff)}}>
    {
      ({ scale }) => (
        <div
          className="alert alert-dismissible alert-danger"
          style={{
            WebkitTransform: `scale(${scale})`,
            transform: `scale(${scale})`
          }}>
          <button
            type="button"
            className="close"
            data-dismiss="alert"
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
  showAlert: PropTypes.bool,
  errorTitle: PropTypes.string,
  errorMessage: PropTypes.string,
  onClose: PropTypes.func.isRequired
};

ErrorAlert.defaultProps = {
  showAlert: false
};

export default ErrorAlert;
