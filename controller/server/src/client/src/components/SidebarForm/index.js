import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

const defaultProps = {
  tag: 'div'
};

class SidebarForm extends Component {
  render() {
    const { className, children, tag: Tag, ...attributes } = this.props;
    const classes = classNames(className, 'sidebar-form');
    const form = children ? 
      <Tag className={classes} {...attributes} >
        {children}
      </Tag>
     : null;

    return (
      form
    );
  }
}

SidebarForm.propTypes = propTypes;
SidebarForm.defaultProps = defaultProps;

export default SidebarForm;