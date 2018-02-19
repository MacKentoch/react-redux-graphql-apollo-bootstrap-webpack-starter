// @flow

// #region imports
import React, { Component } from 'react';
import BackToTopButton from './backToTopButton/BackToTopButton';
import { Motion, spring, presets } from 'react-motion';
// #endregion

// #region flow types
export type Props = {
  minScrollY: number,
  scrollTo?: string,
};

export type State = {
  windowScrollY: number,
  showBackButton: boolean,
  tickingScrollObserve: boolean,
};
// #endregion

class BackToTop extends Component<Props, State> {
  static defaultProps = {
    minScrollY: 120,
  };

  state = {
    windowScrollY: 0,
    showBackButton: false,
    tickingScrollObserve: false,
  };

  // #region lifecycle
  componentWillMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.handleWindowScroll);
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.handleWindowScroll);
    }
  }

  render() {
    const { showBackButton } = this.state;

    return (
      <Motion
        style={{
          interpolatedX: spring(showBackButton ? 0 : 120, presets.stiff),
        }}
      >
        {({ interpolatedX }) => (
          <BackToTopButton
            position={'bottom-right'}
            onClick={this.handlesOnBackButtonClick}
            motionStyle={{
              WebkitTransform: `translate3d(${interpolatedX}px, 0, 0)`,
              transform: `translate3d(${interpolatedX}px, 0, 0)`,
            }}
          />
        )}
      </Motion>
    );
  }
  // #endregion

  // #region on window scroll callback
  handleWindowScroll = () => {
    if (window) {
      const { windowScrollY, tickingScrollObserve } = this.state;
      const { minScrollY } = this.props;

      /* eslint-disable no-undefined */
      const currentWindowScrollY =
        window.pageYOffset !== undefined
          ? window.pageYOffset
          : (
              document.documentElement ||
              document.body.parentNode ||
              document.body
            ).scollTop;
      /* eslint-enable no-undefined */

      if (!tickingScrollObserve) {
        window.requestAnimationFrame(() => {
          if (windowScrollY !== currentWindowScrollY) {
            const shouldShowBackButton =
              currentWindowScrollY >= minScrollY ? true : false;

            this.setState({
              windowScrollY: currentWindowScrollY,
              showBackButton: shouldShowBackButton,
            });
          }
          this.setState({ tickingScrollObserve: false });
        });
      }
      this.setState({ tickingScrollObserve: true });
    }
  };
  // #endregion

  // #region on button click (smooth scroll)
  handlesOnBackButtonClick = (event: SyntheticEvent<>) => {
    if (event) {
      event.preventDefault();
    }
    const { minScrollY } = this.props;
    const { windowScrollY } = this.state;

    if (window && windowScrollY && windowScrollY > minScrollY) {
      // using here smoothscroll-polyfill
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      // smoothScroll.scrollTo(scrollTo, this.scrollDone);
    }
  };
  // #endregion
}

export default BackToTop;
