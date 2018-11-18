import React, { Component } from 'react';
import './../../css/toolkit-inverse.css';

class PageTitle extends Component {
  render() {
    return (
      <div>
        <div className="brw">
            <h6 className="bry">{this.props.subtitle}</h6>
            <h3 className="brx">{this.props.title}</h3>
        </div>
      </div>
    );
  }
}

export default PageTitle;