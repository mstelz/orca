import React, { Component } from 'react';
import PageTitle from './../PageTitle/PageTitle';
import TabPanel from './../TabPanel/TabPanel';

class Overview extends Component {
  render() {
    return (
      <div>
        <div className="brv">
            <PageTitle subtitle="DASHBOARD" title="Overview" />
        </div>
        <hr class="afc agn"></hr>
        <div class="qt">
          <div role="tabpanel" class="qu active" id="support" aria-expanded="true">
            <div class="bvf agn">
                <div class="di bsl">
                  <TabPanel color="bqv" title="Current Temperature" subtitle="°F" value="79.5" />
                  <TabPanel color="bqy" title="PH" subtitle="" value="8.2" decimals="1" />
                  <TabPanel color="bqw" title="Salinity" subtitle="SG" value="1.025" decimals="3" />
                  <TabPanel color="bqx" title="ORP" subtitle="1.3%" value="0" decimals="1" />
                </div>
            </div>
          </div>
          <hr class="agj" />
        </div>
      </div>
    );
  }
}

export default Overview;