import React, {
  PropTypes
}                 from 'react';
import {
  Motion,
  spring,
  presets
}                 from 'react-motion';
import cx         from 'classnames';

const Alert = ({ type, showAlert, errorTitle, errorMessage, onClose }) => (
  <Motion style={{scale: spring(showAlert ? 1 : 0, presets.stiff)}}>
    {
      ({ scale }) => (
        <div
          className={
            cx({
              'alert': true,
              'alert-dismissible': true,
              'alert-danger': type === 'error',
              'alert-warning': type === 'warning'
            })
          }
          style={{
            WebkitTransform: `scale(${scale})`,
            transform: `scale(${scale})`
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


Alert.propTypes = {
  showAlert: PropTypes.bool,
  errorTitle: PropTypes.string,
  errorMessage: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['warning', 'error'])
};

Alert.defaultProps = {
  showAlert: false,
  type: 'wanring'
};

export default Alert;
