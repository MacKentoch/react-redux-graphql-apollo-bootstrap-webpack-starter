// @flow

// #region imports
import React, { PureComponent } from 'react';
import { Motion, spring, presets } from 'react-motion';
// #endregion

// #region flow types
type Props = {
  showAlert: boolean,
  warningTitle: string,
  warningMessage: string,
  onClose: () => any,
};

type State = {};
// #endregion

class WarningAlert extends PureComponent<Props, State> {
  static defaultProps = {
    showAlert: false,
  };

  // #region lifecycle methods
  render() {
    const { showAlert, warningTitle, warningMessage, onClose } = this.props;

    return (
      <Motion
        style={{
          interpolatedScale: spring(showAlert ? 1 : 0, presets.stiff),
        }}
      >
        {({ interpolatedScale }) => (
          <div
            className="alert alert-dismissible alert-warning"
            style={{
              WebkitTransform: `scale(${interpolatedScale})`,
              transform: `scale(${interpolatedScale})`,
            }}
          >
            <button type="button" className="close" onClick={onClose}>
              &times;
            </button>
            {warningTitle &&
              warningTitle.length > 0 && <strong>{warningTitle}</strong>}
            {<p>{warningMessage}</p>}
          </div>
        )}
      </Motion>
    );
  }
  // #endregion
}

export default WarningAlert;
