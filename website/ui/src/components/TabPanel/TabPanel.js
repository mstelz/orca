import React, { Component } from 'react';

class TabPanel extends Component {
  render(){
    return (
      <div className="ep fm afz ang ate">
        <div className={`bsm ${this.props.color}`}>
          <div className="ahm">
            <span className="bqq">{this.props.title}</span>
              <h2 className="bqp">
                {/* {{format-number value decimals}} */}
                {this.props.value}
                <small className="bqr">{this.props.subtitle}</small>
              </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default TabPanel;
