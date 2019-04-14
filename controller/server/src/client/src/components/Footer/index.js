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
  tag: 'footer',
  fixed: false,
};

class Footer extends Component {
  static isFixed(fixed) {
    if (fixed) {
      document.body.classList.add('footer-fixed');
    }
  }

  componentDidMount() {
    Footer.isFixed(this.props.fixed);
  }

  render() {
    const { className, children, tag: Tag, ...attributes } = this.props;

    delete attributes.fixed;

    const classes = classNames(className, 'app-footer');

    return (
      <Tag className={classes} {...attributes}>
        {children}
      </Tag>
    );
  }
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
