// @flow weak

import React            from 'react';
import PropTypes        from 'prop-types';

const Jumbotron = ({
  children
}) => (
  <div className="jumbotron">
    { children }
  </div>
);

Jumbotron.propTypes = {
  children: PropTypes.node
};

export default Jumbotron;
