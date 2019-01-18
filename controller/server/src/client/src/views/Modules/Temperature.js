import React, { Component } from 'react';
import moment from 'moment-timezone';
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardColumns,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Progress,
  Row,
} from 'reactstrap';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import CustomTooltips from '../../components/CustomTooltips';

const brandInfo = getStyle('--info');

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    callbacks: {
      labelColor(tooltipItem, chart) {
        return {
          backgroundColor:
            chart.data.datasets[tooltipItem.datasetIndex].borderColor,
        };
      },
    },
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
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Time',
        },
        ticks: {
          autoSkip: true,
          maxRotation: 60,
          minRotation: 90,
        },
        gridLines: {
          drawOnChartArea: false,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          maxTicksLimit: 5,
          // stepSize: 3,
          // max: 85,
          // min: 70,
        },
      },
    ],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

class Temperature extends Component {
  constructor(props) {
    super(props);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.getTempData = this.getTempData.bind(this);
    this.state = {
      radioSelected: 'day',
      tempData: {},
      timespanLabel: moment().format('MM/DD/YYYY'),
    };
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected,
    });

    switch (radioSelected) {
      case 'day':
        this.getTempData(24);
        this.setState({ timespanLabel: moment().format('MM/DD/YYYY') });
        break;
      case 'week':
        this.getTempData(168);
        this.setState({
          timespanLabel: `${moment()
            .subtract(1, 'week')
            .format('MM/DD/YYYY')} - ${moment().format('MM/DD/YYYY')}`,
        });
        break;
      case 'month':
        this.getTempData(720);
        this.setState({
          timespanLabel: `${moment()
            .subtract(1, 'month')
            .format('MM/DD/YYYY')} - ${moment().format('MM/DD/YYYY')}`,
        });
        break;
    }
  }

  getTempData(hours) {
    fetch(
      `http://www.mikesfishtank.com/api/retrieveTempData.php?interval=${hours}`
    )
      .then(res => res.json())
      .then(
        result => {
          const temps = result.map(obj => {
            const rObj = {};
            rObj.x = moment
              .utc(obj._timestamp)
              .local()
              .format('YYYY-MM-DD HH:mm:ss');
            // rObj.x = moment(obj._timestamp).format('YYYY-MM-DD HH:mm:ss');
            rObj.y = obj.temperature;
            return rObj;
          });
          const latestDate = moment(temps[temps.length - 1].x).format(
            'MM/DD/YYYY'
          );
          const dataset = {
            datasets: [
              {
                // backgroundColor: brandInfo,
                // borderColor: 'rgba(255,255,255,.55)',
                backgroundColor: 'rgba(32,168,216,.55)',
                borderColor: 'rgba(27,33,48,.55)',
                pointBackgroundColor: 'rgb(25, 151, 198)',
                data: temps,
                cubicInterpolationMode: 'monotone',
              },
            ],
          };
          this.setState({
            tempData: dataset,
            latestDate,
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

  componentDidMount() {
    this.getTempData(24);
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">In Tank Temperature</CardTitle>
                    <div className="small text-muted">
                      {this.state.timespanLabel}
                    </div>
                  </Col>
                  <Col sm="7" className="d-none d-sm-inline-block">
                    <Button color="primary" className="float-right">
                      <i className="icon-cloud-download" />
                    </Button>
                    <ButtonToolbar
                      className="float-right"
                      aria-label="Toolbar with button groups"
                    >
                      <ButtonGroup className="mr-3" aria-label="First group">
                        <Button
                          color="outline-secondary"
                          onClick={() => this.onRadioBtnClick('day')}
                          active={this.state.radioSelected === 'day'}
                        >
                          Day
                        </Button>
                        <Button
                          color="outline-secondary"
                          onClick={() => this.onRadioBtnClick('week')}
                          active={this.state.radioSelected === 'week'}
                        >
                          Week
                        </Button>
                        <Button
                          color="outline-secondary"
                          onClick={() => this.onRadioBtnClick('month')}
                          active={this.state.radioSelected === 'month'}
                        >
                          Month
                        </Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div
                  className="chart-wrapper"
                  style={{ height: `${300}px`, marginTop: `${40}px` }}
                >
                  <Line
                    data={this.state.tempData}
                    options={mainChartOpts}
                    height={300}
                  />
                </div>
              </CardBody>
              <CardFooter>
                <Row className="text-center">
                  <Col sm={12} md className="mb-sm-2 mb-0 d-sm-down-none">
                    <div className="text-muted">Max Temp</div>
                    <strong>
                      {this.state.tempData.datasets &&
                        Math.max(
                          ...this.state.tempData.datasets[0].data.map(d => d.y)
                        ).toFixed(2)}
                    </strong>
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0 d-sm-down-none">
                    <div className="text-muted">Min Temp</div>
                    <strong>
                      {this.state.tempData.datasets &&
                        Math.min(
                          ...this.state.tempData.datasets[0].data.map(d => d.y)
                        ).toFixed(2)}
                    </strong>
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0 d-sm-down-none">
                    <div className="text-muted">Average Temp</div>
                    <strong>
                      {this.state.tempData.datasets &&
                        (
                          this.state.tempData.datasets[0].data.reduce(
                            (a, b) => a + Number(b.y),
                            0
                          ) / this.state.tempData.datasets[0].data.length
                        ).toFixed(2)}
                    </strong>
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">Latest Temp</div>
                    <strong>
                      {this.state.tempData.datasets &&
                        Number(
                          this.state.tempData.datasets[0].data[
                            this.state.tempData.datasets[0].data.length - 1
                          ].y
                        ).toFixed(2)}
                    </strong>
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Temperature;
