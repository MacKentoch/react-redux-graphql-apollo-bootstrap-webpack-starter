// @flow

// #region imports
import React, { PureComponent } from 'react';
import { Motion, spring, presets } from 'react-motion';
// #endregion

// #region flow types
export type Props = {
  showAlert: boolean,
  errorTitle: string,
  errorMessage: string,
  onClose: () => any,
};

export type State = {};
// #endregion

class ErrorAlert extends PureComponent<Props, State> {
  static defaultProps = {
    showAlert: false,
  };

  // #region lifecycle methods
  render() {
    const { showAlert, errorTitle, errorMessage, onClose } = this.props;

    return (
      <Motion
        style={{
          interpolatedScale: spring(showAlert ? 1 : 0, presets.stiff),
        }}
      >
        {({ interpolatedScale }) => (
          <div
            className="alert alert-dismissible alert-danger"
            style={{
              WebkitTransform: `scale(${interpolatedScale})`,
              transform: `scale(${interpolatedScale})`,
            }}
          >
            <button type="button" className="close" onClick={onClose}>
              &times;
            </button>
            {errorTitle &&
              errorTitle.length > 0 && <strong>{errorTitle}</strong>}
            {<p>{errorMessage}</p>}
          </div>
        )}
      </Motion>
    );
  }
  // #endregion
}

export default ErrorAlert;
