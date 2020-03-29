import React from 'react'
import Brand from '../brand/Brand';
import logo from "assets/orca-logo.svg";
import orca from "assets/orca.png";
import './topNavBar.css';

interface Props {
    
}

const TopNavbar = (props: Props) => {
    return (
      <div className="headerRow">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="brand-container">
            <Brand
              full={{
                src: logo,
                width: 89,
                height: 25,
                alt: "Orca Logo"
              }}
              minimized={{
                src: orca,
                width: 45,
                height: 30,
                alt: "Orca Logo"
              }}
            />
            {/* <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}
            <button
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              className="navbar-toggler"
              style={{fontSize: '.75rem'}}
            >
              <i className="navbar-toggle fas fa-bars fa-lg"></i>
            </button>
          </div>
          <div>Hello</div>
        </nav>
      </div>
    );
}

export default TopNavbar;
