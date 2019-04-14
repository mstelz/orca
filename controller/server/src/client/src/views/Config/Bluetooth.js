import React, { Component } from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from 'reactstrap';

const infoLabelStyle = {
  paddingRight: '2em',
  fontWeight: 'bold',
  paddingBottom: '1.5em',
};

class Bluetooth extends Component {
  constructor(props) {
    super(props);

    this.toggleAddDevice = this.toggleAddDevice.bind(this);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.state = {
      accordion: [false, false, false],
      collapse: true,
      fadeIn: true,
      modal: false,
      timeout: 300,
    };
  }

  componentDidMount() {
    fetch('/api/bluetooth/devices')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            devices: result,
          });

          result.forEach((device, index) =>
            fetch(`/api/bluetooth/devices/${device.device_uuid}`)
              .then(res => res.json())
              .then(deviceInfo => {
                this.setState(previousState => {
                  previousState.devices[index].services = deviceInfo;
                });
              })
          );
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

  listDevices() {
    if (this.state && this.state.devices) {
      return this.state.devices.map((d, index) => (
        <Card key={d.device_uuid}>
          <CardHeader id="headingOne">
            <Button
              block
              color="link"
              className="text-left m-0 p-0"
              onClick={() => this.toggleAccordion(index)}
              aria-expanded={this.state.accordion[index]}
              aria-controls="collapseOne"
            >
              <h5 className="m-0 p-0" style={{ float: 'left' }}>
                {d.name}
              </h5>
              <div
                style={{ float: 'right' }}
                onClick={this.toggleAddDevice}
                className="btn btn-sm"
              >
                Edit
              </div>
            </Button>
          </CardHeader>
          <Collapse
            isOpen={this.state.accordion[index]}
            data-parent="#accordion"
            id="collapseOne"
            aria-labelledby="headingOne"
          >
            <CardBody>
              <Col xs="12" sm="8" md="6" lg="4" xl="5">
                <div>
                  <div>
                    <span style={infoLabelStyle}>Name: </span>
                    <span style={{ float: 'right' }}>{d.name}</span>
                  </div>
                  <div>
                    <span style={infoLabelStyle}>UUID: </span>
                    <span style={{ float: 'right' }}>{d.device_uuid}</span>
                  </div>
                  <div>
                    <span style={infoLabelStyle}>Auto connect: </span>
                    <span style={{ float: 'right' }}>
                      {d.auto_connect == 1 ? (
                        <i
                          style={{ color: '#4dbd74' }}
                          className="fa fa-check"
                        />
                      ) : (
                        <i
                          style={{ color: '#f86c6b' }}
                          className="fa fa-close"
                        />
                      )}
                    </span>
                  </div>
                </div>
                <div style={infoLabelStyle}>Services:</div>
              </Col>

              <Col xl="8" lg="8" md="6" sm="10" xs="10">
                {d.services ? this.listServices(d.services) : 'Loading...'}
              </Col>
            </CardBody>
          </Collapse>
        </Card>
      ));
    }
    return <div>No Bluetooth Devices found</div>;
  }

  listServices(services) {
    return services.length < 1
      ? 'No custom services found'
      : services.map(d => (
          <Card key={d.device_uuid + d.service_name}>
            <CardHeader>
              <span style={{ float: 'left' }}>{d.service_name}</span>
              <span style={{ float: 'right' }}>{d.service_uuid}</span>
            </CardHeader>
            <CardBody>
              <div>
                <span style={infoLabelStyle}>Name: </span>
                {d.service_name}
              </div>
              <div>
                <span style={infoLabelStyle}>UUID: </span>
                {d.service_uuid}
              </div>
              <div>
                <span style={infoLabelStyle}>Characteristics: </span>
              </div>
              <ul>
                {d.characteristics.map(char => (
                  <li key={char.char_uuid}>
                    {char.char_name}: {char.char_uuid}
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        ));
  }

  toggleAddDevice(event) {
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      modal: !this.state.modal,
    });
    return false;
  }

  toggleAccordion(tab) {
    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    this.setState({
      accordion: state,
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" xl="8">
            <Card>
              <CardHeader>
                <i className="fa fa-bluetooth" /> Bluetooth LE Devices
                <div className="card-header-actions">
                  <Badge>NEW</Badge>
                </div>
              </CardHeader>
              <CardBody>
                <div id="accordion">{this.listDevices()}</div>
                <div>
                  <Button onClick={this.toggleAddDevice} className="mr-1">
                    Add Device
                  </Button>
                  <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggleAddDevice}
                    className={`modal-lg ${this.props.className}`}
                  >
                    <ModalHeader toggle={this.toggleAddDevice}>
                      Add Bluetooth Device
                    </ModalHeader>
                    <ModalBody>
                      <Form
                        action=""
                        method="post"
                        encType="multipart/form-data"
                        className="form-horizontal"
                      >
                        <FormGroup row>
                          <Col md="3">
                            <Label>Device Name</Label>
                          </Col>
                          <Col xs="12" md="9">
                            <Input
                              type="text"
                              id="text-input"
                              name="device_name"
                              placeholder="Name"
                            />
                            <FormText color="muted">
                              Diplay text of your device
                            </FormText>
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="text-input">Device UUID</Label>
                          </Col>
                          <Col xs="12" md="9">
                            <Input
                              type="text"
                              id="text-input"
                              name="device_uuid"
                              placeholder="xx:xx:xx:xx:xx:xx"
                            />
                            <FormText color="muted">
                              UUID of the Device in format 'xx:xx:xx:xx:xx:xx'
                            </FormText>
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Col md="3">
                            <Label>Automatically Connect</Label>
                          </Col>
                          <Col md="9">
                            <FormGroup check className="checkbox">
                              <Input
                                className="form-check-input"
                                type="checkbox"
                                id="checkbox1"
                                name="auto_connect"
                                value="true"
                              />
                              <Label
                                check
                                className="form-check-label"
                                htmlFor="checkbox1"
                              >
                                Yes
                              </Label>
                            </FormGroup>
                          </Col>
                        </FormGroup>
                      </Form>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={this.toggleAddDevice}>
                        Add
                      </Button>{' '}
                      <Button color="secondary" onClick={this.toggleAddDevice}>
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Modal>
                  <div className="btn btn-primary">Add Service</div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Bluetooth;
