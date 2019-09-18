import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = { children: undefined };

export default function FooterLayout(props) {
  // eslint-disable-next-line
  const { children, ...attributes } = props;

  return (
    <React.Fragment>
      <span>
        <a href="https://github.com/bhcmoney/orca">Orca</a> &copy; 2019
      </span>
      <span className="ml-auto">
        Created by <a href="https://github.com/bhcmoney">Bhcmoney</a>
      </span>
    </React.Fragment>
  );
}

FooterLayout.propTypes = propTypes;
FooterLayout.defaultProps = defaultProps;
