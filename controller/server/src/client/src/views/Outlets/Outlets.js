import React, { Component } from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
} from 'reactstrap';

// TODO: Lots of refactoring necessary
class Outlets extends Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.changeSelect = this.changeSelect.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      confirm_modal: false,
      add_modal: true,
      outlets: [],
      outlet_type: '',
      selected_device: '',
      selected_service: '',
      selected_char: '',
    };
  }

  handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  componentDidMount() {
    fetch('/api/outlets')
      .then(res => res.json())
      .then(result => {
        this.setState({ outlets: result });
      });

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

  toggleModal(modal) {
    const modalVal = this.state[modal];
    if (modal == 'add_modal' && modalVal) {
      this.resetForm();
    }
    this.setState({ [modal]: !modalVal });
  }

  // TODO: REFACTOR THESE FORM SELECT CHANGES TO USE ON CHANGE HANDLER
  resetForm() {
    this.setState({
      outlet_type: '',
      selected_device: '',
      selected_service: '',
    });
  }

  changeSelect(select, key) {
    if (select) {
      this.setState({ [key]: select.target.value });
    }
  }

  // Submit the form
  // TODO: REFACTOR THE DATA AND FORM CREATION
  handleSubmit() {
    event.preventDefault();

    let data = {
      name: event.target.outlet_name.value,
      default_state: event.target.default_state.value,
      type: event.target.type.value,
    };

    if (data.type === 'GPIO') {
      data = { ...data, ...{ pin: event.target.pin.value } };
    } else {
      console.log();
      data = {
        ...data,
        ...{
          deviceUuid: this.state.devices[this.state.selected_device]
            .device_uuid,
          serviceUuid: this.state.devices[this.state.selected_device].services[
            this.state.selected_service
          ].service_uuid,
          charUuid: this.state.devices[this.state.selected_device].services[
            this.state.selected_service
          ].characteristics[this.state.selected_char].char_uuid,
        },
      };
    }
    // TODO: Update table after this post, and fix error handling
    fetch('/api/outlets', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(this.handleErrors)
      .then(response => this.toggleModal('add_modal'))
      .catch(err => alert(`Adding outlet failed: ${err}`));
  }

  renderTypeOptions() {
    if (this.state.outlet_type === 'Bluetooth') {
      return (
        <div>
          <FormGroup row>
            <Col md="3">
              <Label>Bluetooth Device</Label>
            </Col>
            <Col xs="12" md="9">
              <Input
                type="select"
                name="device_uuid"
                id="select"
                defaultValue=""
                onChange={select =>
                  this.changeSelect(select, 'selected_device')
                }
                required
              >
                <option value="" disabled>
                  Please Select
                </option>
                {this.state.devices.map((val, i) => (
                  <option key={val.device_uuid} value={i}>
                    {val.name}
                    {i}
                  </option>
                ))}
              </Input>
            </Col>
          </FormGroup>
          {this.state.selected_device != '' && (
            <FormGroup row>
              <Col md="3">
                <Label>Service</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="select"
                  name="service_uuid"
                  id="select"
                  defaultValue=""
                  onChange={select =>
                    this.changeSelect(select, 'selected_service')
                  }
                  required
                >
                  <option value="" disabled>
                    Please Select
                  </option>
                  {this.state.devices[this.state.selected_device].services.map(
                    (val, i) => (
                      <option key={val.service_uuid} value={i}>
                        {val.service_name}
                      </option>
                    )
                  )}
                </Input>
              </Col>
            </FormGroup>
          )}
          {this.state.selected_service != '' && (
            <FormGroup row>
              <Col md="3">
                <Label>Characteristic</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="select"
                  name="char_uuid"
                  id="select"
                  defaultValue=""
                  onChange={select =>
                    this.changeSelect(select, 'selected_char')
                  }
                  required
                >
                  <option value="" disabled>
                    Please Select
                  </option>
                  {this.state.devices[this.state.selected_device].services[
                    this.state.selected_service
                  ].characteristics.map((val, i) => (
                    <option key={val.char_uuid} value={i}>
                      {val.char_name}
                    </option>
                  ))}
                </Input>
              </Col>
            </FormGroup>
          )}
        </div>
      );
    }
    if (this.state.outlet_type === 'GPIO') {
      return (
        <div>
          <FormGroup row>
            <Col md="3">
              <Label>Pin Number</Label>
            </Col>
            <Col xs="12" md="9">
              <Input
                type="text"
                id="text-input"
                name="pin"
                placeholder="Pin Number"
              />
              <FormText color="muted">Enter a valid GPIO Pin Number</FormText>
            </Col>
          </FormGroup>
        </div>
      );
    }
    return (
      <div>
        <Col md="3">
          <Label>Type Info</Label>
        </Col>
      </div>
    );
  }

  render() {
    const { outlets } = this.state;

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-plug" /> Outlets
              </CardHeader>
              <CardBody>
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Default State</th>
                      <th>Current State</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {outlets.map((val, i) => (
                      <tr>
                        <td>{val.name}</td>
                        <td>{val.type}</td>
                        <td>
                          <Badge color="danger">Off</Badge>
                        </td>
                        <td>
                          <Badge color="success">On</Badge>
                        </td>
                        <td>
                          <div
                            style={{
                              color: '#f86c6b',
                              cursor: 'pointer',
                            }}
                            onClick={() => this.toggleModal('confirm_modal')}
                            className="fa fa-trash fa-lg"
                            id="1"
                          />
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td>BT - Power bar 1</td>
                      <td>Bluetooth</td>
                      <td>
                        <Badge color="danger">Off</Badge>
                      </td>
                      <td>
                        <Badge color="success">On</Badge>
                      </td>
                      <td>
                        <div
                          style={{
                            color: '#f86c6b',
                            cursor: 'pointer',
                          }}
                          onClick={() => this.toggleModal('confirm_modal')}
                          className="fa fa-trash fa-lg"
                          id="1"
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Button
                  color="primary"
                  onClick={() => this.toggleModal('add_modal')}
                >
                  Add Outlet
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Modal
          isOpen={this.state.confirm_modal}
          toggle={() => this.toggleModal('confirm_modal')}
          className={`modal-md ${this.props.className}`}
        >
          <ModalHeader>
            <i style={{ color: '#f86c6b' }} className="fa fa-warning fa-lg" />{' '}
            Delete Outlet
          </ModalHeader>
          <ModalBody>
            <div>Are you sure you want to delete this outlet?</div>
          </ModalBody>
          <ModalFooter>
            <Button
              color="secondary"
              size="lg"
              onClick={() => this.toggleModal('confirm_modal')}
            >
              Cancel
            </Button>{' '}
            <Button
              color="danger"
              size="lg"
              onClick={() => this.toggleModal('confirm_modal')}
            >
              Delete
            </Button>
          </ModalFooter>
        </Modal>

        <Modal
          isOpen={this.state.add_modal}
          toggle={() => this.toggleModal('add_modal')}
          className={`modal-md ${this.props.className}`}
        >
          <ModalHeader>
            <i style={{ color: '#4dbd74' }} className="fa fa-plus fa-lg" /> Add
            New Outlet
          </ModalHeader>
          <ModalBody>
            <Form
              onSubmit={this.handleSubmit}
              id="addOutletForm"
              className="form-horizontal"
            >
              <FormGroup row>
                <Col md="3">
                  <Label>Outlet Name</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    type="text"
                    id="text-input"
                    name="outlet_name"
                    placeholder="Name"
                    required
                  />
                  <FormText color="muted">Diplay text of your outlet</FormText>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label>Default State</Label>
                </Col>
                <Col md="9">
                  <FormGroup check inline>
                    <Input
                      className="form-check-input"
                      type="radio"
                      id="inline-radio1"
                      name="default_state"
                      value="1"
                    />
                    <Label
                      className="form-check-label"
                      check
                      htmlFor="inline-radio1"
                    >
                      On
                    </Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input
                      className="form-check-input"
                      type="radio"
                      id="inline-radio2"
                      name="default_state"
                      value="0"
                      defaultChecked
                    />
                    <Label
                      className="form-check-label"
                      check
                      htmlFor="inline-radio2"
                    >
                      Off
                    </Label>
                  </FormGroup>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="select">Outlet Type</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    type="select"
                    name="type"
                    id="select"
                    defaultValue=""
                    onChange={select =>
                      this.changeSelect(select, 'outlet_type')
                    }
                    required
                  >
                    <option value="" disabled>
                      Please Select
                    </option>
                    <option value="GPIO">GPIO</option>
                    <option value="Bluetooth">Bluetooth</option>
                  </Input>
                </Col>
              </FormGroup>
              {this.renderTypeOptions()}
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button
              color="secondary"
              size="lg"
              onClick={() => this.toggleModal('add_modal')}
            >
              Cancel
            </Button>{' '}
            <input
              type="submit"
              form="addOutletForm"
              value="Add"
              className="btn btn-lg btn-success"
            />
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Outlets;
