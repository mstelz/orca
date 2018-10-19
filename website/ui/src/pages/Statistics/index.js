import React, { Component } from 'react';
import PageTitle from './../../components/PageTitle/PageTitle';
import TabPanel from './../../components/TabPanel/TabPanel';

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: null
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/api/temperature")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            temperature: result.temperature
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return (
      <div>
        <div className="brv">
            <PageTitle subtitle="DASHBOARD" title="Statistics" />
        </div>
        <hr className="afc agn"></hr>
        <div className="qt">
          <div role="tabpanel" className="qu active" id="support" aria-expanded="true">
            <div className="bvf agn">
                <div className="di bsl">
                  <TabPanel color="bqv" title="Current Temperature" subtitle="°F" value={this.state.temperature} />
                  <TabPanel color="bqy" title="PH" subtitle="" value="8.2" decimals="1" />
                  <TabPanel color="bqw" title="Salinity" subtitle="SG" value="1.025" decimals="3" />
                  <TabPanel color="bqx" title="ORP" subtitle="1.3%" value="0" decimals="1" />
                </div>
            </div>
          </div>
          <hr className="agj" />
        </div>
      </div>
    );
  }
}

export default Overview;