import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Glyph from '../Utils/Glyph';

class NavItem extends Component {
  render() {
    return (
      <li className="qp">
        <NavLink activeClassName="active" className="qn" to={this.props.link}>
          <Glyph icon={this.props.glyph} />
          <small className="brt axz">{this.props.name}</small>
        </NavLink>
      </li>        
    );
  }
}

export default NavItem;
