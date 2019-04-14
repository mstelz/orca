import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import {
  ButtonDropdown,
  ButtonGroup,
  Card,
  CardBody,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from 'reactstrap';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import CustomTooltips from '../../components/CustomTooltips';

const brandPrimary = getStyle('--primary');
const brandSuccess = getStyle('--success');
const brandInfo = getStyle('--info');
const brandWarning = getStyle('--warning');
const brandDanger = getStyle('--danger');

// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40],
    },
  ],
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },
      },
    ],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min(...cardChartData1.datasets[0].data) - 5,
          max: Math.max(...cardChartData1.datasets[0].data) + 5,
        },
      },
    ],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

const chartTempData = [
  { x: '2018-10-16T18:00:04.000Z', y: '79.1366' },
  { x: '2018-10-16T18:15:04.000Z', y: '79.25' },
  { x: '2018-10-16T18:30:04.000Z', y: '79.3616' },
  { x: '2018-10-16T18:45:04.000Z', y: '78.9116' },
  { x: '2018-10-16T19:00:03.000Z', y: '78.8' },
  { x: '2018-10-16T19:15:04.000Z', y: '78.575' },
  { x: '2018-10-16T19:30:04.000Z', y: '78.6866' },
  { x: '2018-10-16T19:45:04.000Z', y: '78.9116' },
  { x: '2018-10-16T20:00:04.000Z', y: '79.025' },
  { x: '2018-10-16T20:15:04.000Z', y: '78.9116' },
  { x: '2018-10-16T20:30:04.000Z', y: '78.6866' },
  { x: '2018-10-16T20:45:04.000Z', y: '78.575' },
  { x: '2018-10-16T21:00:04.000Z', y: '78.9116' },
  { x: '2018-10-16T21:15:04.000Z', y: '79.025' },
  { x: '2018-10-16T21:30:05.000Z', y: '79.25' },
  { x: '2018-10-16T21:45:03.000Z', y: '78.9116' },
];

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        position: 'bottom',
        type: 'time',
        time: {
          displayFormats: {
            unit: 'minute',
          },
        },
        display: false,
        ticks: {
          autoSkip: true,
          maxRotation: 60,
          minRotation: 90,
        },
      },
    ],
    yAxes: [
      {
        display: false,
        ticks: {
          padding: 5,
        },
      },
    ],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 3,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40],
    },
  ],
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      },
    ],
    yAxes: [
      {
        display: false,
      },
    ],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
    },
  ],
};

// Main Chart

// Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const elements = 27;
const data1 = [];
const data2 = [];
const data3 = [];

for (let i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.myRef = React.createRef();

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      tempData: {},
      latestTemp: undefined,
    };
  }

  componentDidMount() {
    fetch('http://www.mikesfishtank.com/api/retrieveTempData.php?interval=4')
      .then(res => res.json())
      .then(
        result => {
          const temps = result.map(obj => {
            const rObj = {};
            rObj.x = moment
              .utc(obj._timestamp)
              .local()
              .format('YYYY-MM-DD HH:mm:ss');
            rObj.y = obj.temperature;
            // return {'x': moment(obj._timestamp).format('YYYY-MM-DD hh:mm:ss'), 'y': obj.temperature}
            return rObj;
          });
          const latestTemp = temps[temps.length - 1].y;
          const dataset = {
            datasets: [
              {
                backgroundColor: brandInfo,
                borderColor: 'rgba(255,255,255,.55)',
                data: temps,
              },
            ],
          };
          this.setState({
            tempData: dataset,
            latestTemp,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected,
    });
  }

  round(number, decimals) {
    if (number) return parseFloat(number).toFixed(decimals);
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown
                    id="card3"
                    isOpen={this.state.card1}
                    toggle={() => {
                      this.setState({ card1: !this.state.card1 });
                    }}
                  >
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem href="/#/modules/temperature">
                        More Details
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value">
                  {this.round(this.state.latestTemp, 2)}
                  <span style={{ fontSize: '0.75em' }}> °F</span>
                </div>
                <div>Last 4 hours</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line
                  ref={this.myRef}
                  data={this.state.tempData}
                  options={cardChartOpts2}
                  height={70}
                />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-primary">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown
                    id="card2"
                    isOpen={this.state.card2}
                    toggle={() => {
                      this.setState({ card2: !this.state.card2 });
                    }}
                  >
                    <DropdownToggle className="p-0" color="transparent">
                      <i className="icon-location-pin" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value">8.2</div>
                <div>PH</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line
                  data={cardChartData1}
                  options={cardChartOpts1}
                  height={70}
                />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-warning">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown
                    id="card3"
                    isOpen={this.state.card3}
                    toggle={() => {
                      this.setState({ card3: !this.state.card3 });
                    }}
                  >
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value">1.025</div>
                <div>SG</div>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px' }}>
                <Line
                  data={cardChartData3}
                  options={cardChartOpts3}
                  height={70}
                />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-danger">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown
                    id="card4"
                    isOpen={this.state.card4}
                    toggle={() => {
                      this.setState({ card4: !this.state.card4 });
                    }}
                  >
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings" />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value">0.0</div>
                <div>ORP</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line
                  data={cardChartData4}
                  options={cardChartOpts3}
                  height={70}
                />
                {/* <Bar data={cardChartData4} options={cardChartOpts4} height={70} /> */}
              </div>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" lg="6">
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">Video</CardTitle>
                    <div className="small text-muted">November 2015</div>
                  </Col>
                </Row>
                <div className="chart-wrapper" style={{ marginTop: `${30}px` }}>
                  <img
                    alt="video"
                    className="rounded img-fluid"
                    style={{ width: '100%' }}
                    src="http://69.245.219.195:8080/stream/video.mjpeg"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
