// @flow

export type NavItem = {
  link: string,
  label: string,
  viewName: string,
};

export type Props = {
  leftLinks: Array<NavItem>,
  onLeftNavButtonClick: () => {},

  ...any,
};
