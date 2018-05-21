import React, { Component } from 'react';
import Glyph from '../Utils/Glyph';

class NavItem extends Component {
  render() {
    return (
      <li className="qp">
        <a className="qn" href={this.props.link}>
          <Glyph icon={this.props.glyph} />
          <small className="brt axz">{this.props.name}</small>
        </a>
      </li>        
    );
  }
}

export default NavItem;
