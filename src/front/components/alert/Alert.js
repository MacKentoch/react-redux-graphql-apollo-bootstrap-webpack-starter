// @flow

// #region imports
import React, { PureComponent } from 'react';
import { Motion, spring, presets } from 'react-motion';
import cx from 'classnames';
// #endregion

// #region flow types
export type Props = {
  showAlert: boolean,
  errorTitle: string,
  errorMessage: string,
  onClose: () => any,
  type: 'warning' | 'error',
};

export type State = {};
// #endregion

class Alert extends PureComponent<Props, State> {
  static defaultProps = {
    showAlert: false,
    type: 'warning',
  };

  // #region lifecycle methods
  render() {
    const { type, showAlert, errorTitle, errorMessage, onClose } = this.props;

    return (
      <Motion
        style={{
          interpolatedScale: spring(showAlert ? 1 : 0, presets.stiff),
        }}
      >
        {({ interpolatedScale }) => (
          <div
            className={cx({
              alert: true,
              'alert-dismissible': true,
              'alert-danger': type === 'error',
              'alert-warning': type === 'warning',
            })}
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

export default Alert;
