import { SyntheticEvent } from 'react';

// @flow

export type Props = {
  link: string,
  label: string,
  viewName: string,
  onClick: (event: SyntheticEvent<>, viewName: string) => any,
  ...any,
};

export type State = {
  ...any,
};
