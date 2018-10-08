import React, { Component } from 'react';
import NavItem from "./NavItem";

import "./Nav.css";

class Nav extends Component {
  state = {
    response: ''
  };

  render() {
    return (
      <nav className="ch">
        <a className="brq" href="/">
          <span className="bv bik brr"></span>
        </a>
        <div className="bru">
          <ul className="nav qq brs aaj">
              <NavItem link="/" glyph="bhn" activeClassName="active" name="Overview" /> 
              <NavItem link="parameters" glyph="bnv" activeClassName="active" name="History" />
              <NavItem link="/" glyph="bgy" activeClassName="active" name="Web Controls" />
              <NavItem link="video" glyph="video" activeClassName="active" name="Video" />
              <NavItem link="statistics" glyph="bau" activeClassName="active" name="Statistics" />
              <NavItem link="/" glyph="plug" activeClassName="active" name="Power Control" />
              <NavItem link="/" glyph="biv" activeClassName="active" name="Documentation" />
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
