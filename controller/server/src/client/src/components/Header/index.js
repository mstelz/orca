import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fixed: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {
  children: undefined,
  className: '',
  tag: 'header',
  fixed: false,
};

class Header extends Component {
  static isFixed(fixed) {
    if (fixed) {
      document.body.classList.add('header-fixed');
    }
  }

  componentDidMount() {
    Header.isFixed(this.props.fixed);
  }

  // breakpoint(breakpoint) {
  //   return breakpoint || '';
  // }

  render() {
    const { className, children, tag: Tag, ...attributes } = this.props;

    delete attributes.fixed;

    const classes = classNames(className, 'app-header', 'navbar');

    return (
      <Tag className={classes} {...attributes}>
        {children}
      </Tag>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
