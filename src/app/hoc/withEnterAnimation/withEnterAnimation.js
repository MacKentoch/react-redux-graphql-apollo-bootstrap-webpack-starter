// @flow

// #region imports
import React, { Component } from 'react';
import wrapDisplayName from 'recompose/wrapDisplayName';
import cx from 'classnames';
// import styles from './withEnterAnimation.scss';
// #endregion

// #region constants
// IMPORTANT: we need to bind classnames to CSSModule generated classes:
// const cx = classnames.bind(styles);
// #endregion

function withEnterAnimation() {
  return BaseComponent => {
    class WithEnterAnimation extends Component<any, any> {
      render() {
        const { ...passProps } = this.props;

        return (
          <div className={cx({ viewEnter: true })}>
            <BaseComponent {...passProps} />
          </div>
        );
      }
    }

    /* eslint-disable no-process-env */
    if (process.env.NODE_ENV !== 'production') {
      // HOC would obfuscate component name, this trick is helpful for dev (we don't care in production)
      WithEnterAnimation.displayName = wrapDisplayName(
        BaseComponent,
        'withEnterAnimation',
      );
    }
    /* eslint-enable no-process-env */

    return WithEnterAnimation;
  };
}

export default withEnterAnimation;
