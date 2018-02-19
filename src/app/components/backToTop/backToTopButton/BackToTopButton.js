// @flow

// #region imports
import React, { SyntheticEvent } from 'react';
import cx from 'classnames';
import UpIcon from './UpIcon';
// #endregion

// #region flow types
export type Props = {
  position: 'bottom-left' | 'bottom-right',
  onClick: (event: SyntheticEvent<>) => any,
  children: React$Node,
  motionStyle: any,
};
// #endregion

// #region constants
const defaultBackGroundColor = '#4A4A4A';
const sideOffset = '-10px';
const bottomOffset = '40px';
const defaultWidth = '100px';
const defaultZindex = 10;
const defaultOpacity = 0.5;
const defaultStyle = {
  position: 'fixed',
  right: sideOffset,
  left: '',
  bottom: bottomOffset,
  width: defaultWidth,
  zIndex: defaultZindex,
  opacity: defaultOpacity,
  backgroundColor: defaultBackGroundColor,
};
// #endregion

const BackToTopButton = ({
  onClick,
  position,
  children,
  motionStyle,
}: Props) => {
  const buttonStyle = setPosition(position, {
    ...motionStyle,
    ...defaultStyle,
  });

  return (
    <button style={buttonStyle} className={cx({ btn: true })} onClick={onClick}>
      {!children && (
        <div style={{ marginRight: '10px' }}>
          <UpIcon color={'#F1F1F1'} />
        </div>
      )}
      {!!children && children}
    </button>
  );
};

// #region static props
BackToTopButton.defaultProps = {
  position: 'bottom-right',
};

BackToTopButton.displayName = 'BackToTopButton';
// #endregion

// #region helper
function setPosition(position = 'bottom-right', refStyle = defaultStyle): any {
  const style = { ...refStyle };

  switch (position) {
    case 'bottom-right':
      style.right = sideOffset;
      style.left = '';
      return style;

    case 'bottom-left':
      style.right = '';
      style.left = sideOffset;
      return style;

    default:
      return refStyle;
  }
}
// #endregion

export default BackToTopButton;
