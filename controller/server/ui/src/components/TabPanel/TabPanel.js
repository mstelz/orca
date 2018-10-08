import React, { Component } from 'react';

class TabPanel extends Component {
  render(){
    return (
      <div className="ep fm afz ang ate">
        <div class={`bsm ${this.props.color}`}>
          <div class="ahm">
            <span class="bqq">{this.props.title}</span>
              <h2 class="bqp">
                {/* {{format-number value decimals}} */}
                {this.props.value}
                <small class="bqr">{this.props.subtitle}</small>
              </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default TabPanel;
