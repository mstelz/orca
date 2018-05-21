import React, { Component } from 'react';
import NavItem from "./NavItem";

// import "./Nav.css";

class Nav extends Component {
  state = {
    response: ''
  };

  render() {
    return (
      <div className="brp">
        <nav className="ch">
          <a className="brq" href="/">
            <span className="bv bik brr"></span>
          </a>
          <div className="bru">
            <ul className="nav qq brs aaj">
                <NavItem link="/" glyph="bhn" name="Overview" /> 
                <NavItem link="parameters" glyph="bnv" name="History" />
                <NavItem link="/" glyph="bgy" name="Web Controls" />
                <NavItem link="video" glyph="video" name="Video" />
                <NavItem link="statistics" glyph="bau" name="Statistics" />
                <NavItem link="/" glyph="plug" name="Power Control" />
                <NavItem link="/" glyph="biv" name="Documentation" />
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
