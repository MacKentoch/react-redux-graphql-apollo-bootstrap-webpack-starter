// @flow

// #region imports
import React, { Component } from 'react';
import wrapDisplayName from 'recompose/wrapDisplayName';
import styled, { keyframes, css } from 'styled-components';
// #endregion

// #region styled component
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: none;
  }
`;

const AnimatedDiv = styled.div`
  ${({ viewEnter }) =>
    viewEnter &&
    css`
      opacity: 0;
      animation-name: ${fadeIn};
      animation-timing-function: ease-in;
      animation-duration: 0.7s;
      animation-delay: 0s;
      animation-fill-mode: both;
    `};
`;
// #endregion

function withEnterAnimation() {
  return (BaseComponent: any) => {
    class WithEnterAnimation extends Component<any, any> {
      render() {
        const { ...passProps } = this.props;

        return (
          <AnimatedDiv viewEnter={true}>
            <BaseComponent {...passProps} />
          </AnimatedDiv>
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
