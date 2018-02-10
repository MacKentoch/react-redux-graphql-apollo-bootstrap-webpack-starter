// @flow

// #region imports
import compose from 'recompose/compose';
import withEnterAnimation from '../../hoc/withEnterAnimation';
import PageNotFound from './PageNotFound';
// #endregion

export default compose(withEnterAnimation())(PageNotFound);
