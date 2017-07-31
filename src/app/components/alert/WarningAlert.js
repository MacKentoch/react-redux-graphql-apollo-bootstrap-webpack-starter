// @flow weak

import React, {
  PureComponent
}      from 'react';
import PropTypes  from 'prop-types';
import {
  Motion,
  spring,
  presets
}                 from 'react-motion';


class WarningAlert extends PureComponent {
  static propTypes = {
    showAlert:      PropTypes.bool,
    warningTitle:   PropTypes.string,
    warningMessage: PropTypes.string,
    onClose:        PropTypes.func.isRequired
  };

  static defaultProps = {
    showAlert: false
  };

  render() {
    const {
      showAlert,
      warningTitle,
      warningMessage,
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
             className="alert alert-dismissible alert-warning"
             style={{
               WebkitTransform:  `scale(${interpolatedScale})`,
               transform:        `scale(${interpolatedScale})`
             }}
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
          )
        }
      </Motion>
    );
  }
}

export default WarningAlert;
