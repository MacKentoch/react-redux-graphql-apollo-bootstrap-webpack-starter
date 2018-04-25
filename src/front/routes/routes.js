// @flow

// #region imports
import loadable from 'loadable-components';
// #endregion

export const Home = loadable(() => import('../views/home'));
export const About = loadable(() => import('../views/about'));
export const Register = loadable(() => import('../views/register'));
export const Protected = loadable(() => import('../views/protected'));
export const PrivateRoute = loadable(() =>
  import('../components/privateRoute/PrivateRoute'),
);
export const PageNotFound = loadable(() => import('../views/pageNotFound'));
