import React, {
  PropTypes
}                 from 'react';
import {
  Motion,
  spring,
  presets
}                 from 'react-motion';


const WarningAlert = ({ showAlert, warningTitle, warningMessage, onClose }) => (
  <Motion style={{scale: spring(showAlert ? 1 : 0, presets.stiff)}}>
    {
      ({ scale }) => (
        <div
          className="alert alert-dismissible alert-warning"
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
            warningTitle && warningTitle.length > 0 &&
            <strong>
              {warningTitle}
            </strong>
          }
          {
            <p>
              {warningMessage}
            </p>
          }
        </div>
      )
    }
  </Motion>
);


WarningAlert.propTypes = {
  showAlert: PropTypes.bool,
  warningTitle: PropTypes.string,
  warningMessage: PropTypes.string,
  onClose: PropTypes.func.isRequired
};

WarningAlert.defaultProps = {
  showAlert: false
};

export default WarningAlert;
