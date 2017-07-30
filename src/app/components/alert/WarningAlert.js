// @flow weak

import React      from 'react';
import PropTypes  from 'prop-types';
import {
  Motion,
  spring,
  presets
}                 from 'react-motion';


const WarningAlert = ({
  showAlert,
  warningTitle,
  warningMessage,
  onClose
}) => (
  // <Motion
  //   style={{
  //     interpolatedScale: spring(showAlert ? 1 : 0, presets.stiff)
  //   }}>
  //   {
  //     ({ interpolatedScale }) => (
        <div
          className="alert alert-dismissible alert-warning"
         // style={{
         //   WebkitTransform:  `scale(${interpolatedScale})`,
         //   transform:        `scale(${interpolatedScale})`
         // }}
        >
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
  //     )
  //   }
  // </Motion>
);


WarningAlert.propTypes = {
  showAlert:      PropTypes.bool,
  warningTitle:   PropTypes.string,
  warningMessage: PropTypes.string,
  onClose:        PropTypes.func.isRequired
};

WarningAlert.defaultProps = {
  showAlert: false
};

export default WarningAlert;
