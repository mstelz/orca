import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import Switch from '../../../components/Switch';

class Switches extends Component {
  render() {
    return (
      <div className="animated fadeIn">

        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch default
              </CardHeader>
              <CardBody>
                <Switch className={'mx-1'} color={'primary'} checked />
                <Switch className={'mx-1'} color={'secondary'} checked />
                <Switch className={'mx-1'} color={'success'} checked />
                <Switch className={'mx-1'} color={'warning'} checked />
                <Switch className={'mx-1'} color={'info'} checked />
                <Switch className={'mx-1'} color={'danger'} checked />
                <Switch className={'mx-1'} color={'light'} checked />
                <Switch className={'mx-1'} color={'dark'} checked />
                <Switch className={'mx-1'} color={'primary'} disabled />
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch pills
              </CardHeader>
              <CardBody>
                <Switch className={'mx-1'} variant={'pill'} color={'primary'} checked />
                <Switch className={'mx-1'} variant={'pill'} color={'secondary'} checked />
                <Switch className={'mx-1'} variant={'pill'} color={'success'} checked />
                <Switch className={'mx-1'} variant={'pill'} color={'warning'} checked />
                <Switch className={'mx-1'} variant={'pill'} color={'info'} checked />
                <Switch className={'mx-1'} variant={'pill'} color={'danger'} checked />
                <Switch className={'mx-1'} variant={'pill'} color={'light'} checked />
                <Switch className={'mx-1'} variant={'pill'} color={'dark'} checked />
                <Switch className={'mx-1'} variant={'pill'} color={'primary'} disabled />
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                3d Switch
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CardHeader>
              <CardBody>
                <Switch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked />
                <Switch className={'mx-1'} variant={'3d'} color={'secondary'} defaultChecked />
                <Switch className={'mx-1'} variant={'3d'} color={'success'} defaultChecked />
                <Switch className={'mx-1'} variant={'3d'} color={'warning'} defaultChecked />
                <Switch className={'mx-1'} variant={'3d'} color={'info'} defaultChecked />
                <Switch className={'mx-1'} variant={'3d'} color={'danger'} defaultChecked />
                <Switch className={'mx-1'} variant={'3d'} color={'light'} defaultChecked />
                <Switch className={'mx-1'} variant={'3d'} color={'dark'} defaultChecked />
                <Switch className={'mx-1'} variant={'3d'} color={'primary'}  />
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                3d Switch <small><code>disabled</code></small>
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CardHeader>
              <CardBody>
                <Switch className={'mx-1'} variant={'3d'} color={'primary'} checked disabled />
                <Switch className={'mx-1'} variant={'3d'} color={'secondary'} checked disabled />
                <Switch className={'mx-1'} variant={'3d'} color={'success'} checked disabled />
                <Switch className={'mx-1'} variant={'3d'} color={'warning'} checked disabled />
                <Switch className={'mx-1'} variant={'3d'} color={'info'} checked disabled />
                <Switch className={'mx-1'} variant={'3d'} color={'danger'} checked disabled />
                <Switch className={'mx-1'} variant={'3d'} color={'light'} checked disabled />
                <Switch className={'mx-1'} variant={'3d'} color={'dark'} checked disabled />
                <Switch className={'mx-1'} variant={'3d'} color={'primary'} disabled />
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                3d Switch <small><code>outline="alt"</code></small>
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CardHeader>
              <CardBody>
                <Switch className={'mx-1'} variant={'3d'} color={'primary'} checked outline={'alt'} />
                <Switch className={'mx-1'} variant={'3d'} color={'secondary'} checked outline={'alt'} />
                <Switch className={'mx-1'} variant={'3d'} color={'success'} checked outline={'alt'} />
                <Switch className={'mx-1'} variant={'3d'} color={'warning'} checked outline={'alt'} />
                <Switch className={'mx-1'} variant={'3d'} color={'info'} checked outline={'alt'} />
                <Switch className={'mx-1'} variant={'3d'} color={'danger'} checked outline={'alt'} />
                <Switch className={'mx-1'} variant={'3d'} color={'light'} checked outline={'alt'} />
                <Switch className={'mx-1'} variant={'3d'} color={'dark'} checked outline={'alt'} />
                <Switch className={'mx-1'} variant={'3d'} color={'primary'} outline={'alt'} disabled />
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                3d Switch <small><code>label</code></small>
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CardHeader>
              <CardBody>
                <Switch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked label dataOn={'\u2713'} dataOff={'\u2715'} />
                <Switch className={'mx-1'} variant={'3d'} color={'secondary'} defaultChecked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                <Switch className={'mx-1'} variant={'3d'} color={'success'} defaultChecked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                <Switch className={'mx-1'} variant={'3d'} color={'warning'} defaultChecked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                <Switch className={'mx-1'} variant={'3d'} color={'info'} defaultChecked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                <Switch className={'mx-1'} variant={'3d'} color={'danger'} defaultChecked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                <Switch className={'mx-1'} variant={'3d'} color={'light'} defaultChecked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                <Switch className={'mx-1'} variant={'3d'} color={'dark'} defaultChecked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                <Switch className={'mx-1'} variant={'3d'} color={'primary'} label dataOn={'\u2713'} dataOff={'\u2715'}/>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                3d Switch <small><code>outline="alt" label</code></small>
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CardHeader>
              <CardBody>
                <Switch className={'mx-1'} variant={'3d'} outline={'alt'} color={'primary'} defaultChecked label dataOn={'\u2713'} dataOff={'\u2715'} />
                <Switch className={'mx-1'} variant={'3d'} outline={'alt'} color={'secondary'} defaultChecked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                <Switch className={'mx-1'} variant={'3d'} outline={'alt'} color={'success'} defaultChecked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                <Switch className={'mx-1'} variant={'3d'} outline={'alt'} color={'warning'} defaultChecked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                <Switch className={'mx-1'} variant={'3d'} outline={'alt'} color={'info'} defaultChecked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                <Switch className={'mx-1'} variant={'3d'} outline={'alt'} color={'danger'} defaultChecked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                <Switch className={'mx-1'} variant={'3d'} outline={'alt'} color={'light'} defaultChecked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                <Switch className={'mx-1'} variant={'3d'} outline={'alt'} color={'dark'} defaultChecked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                <Switch className={'mx-1'} variant={'3d'} outline={'alt'} color={'primary'} label dataOn={'\u2713'} dataOff={'\u2715'}/>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                3d Switch <small><code>outline="alt" label</code></small>
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CardHeader>
              <CardBody>
                <Switch className={'mx-1'} variant={'3d'} outline={'alt'} color={'primary'} defaultChecked label />
                <Switch className={'mx-1'} variant={'3d'} outline={'alt'} color={'secondary'} defaultChecked label />
                <Switch className={'mx-1'} variant={'3d'} outline={'alt'} color={'success'} defaultChecked label />
                <Switch className={'mx-1'} variant={'3d'} outline={'alt'} color={'warning'} defaultChecked label />
                <Switch className={'mx-1'} variant={'3d'} outline={'alt'} color={'info'} defaultChecked label />
                <Switch className={'mx-1'} variant={'3d'} outline={'alt'} color={'danger'} defaultChecked label />
                <Switch className={'mx-1'} variant={'3d'} outline={'alt'} color={'light'} defaultChecked label />
                <Switch className={'mx-1'} variant={'3d'} outline={'alt'} color={'dark'} defaultChecked label />
                <Switch className={'mx-1'} variant={'3d'} outline={'alt'} color={'primary'} label />
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch outline
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CardHeader>
              <CardBody>
                <Switch className={'mx-1'} color={'primary'} outline checked />
                <Switch className={'mx-1'} color={'secondary'} outline checked />
                <Switch className={'mx-1'} color={'success'} outline checked />
                <Switch className={'mx-1'} color={'warning'} outline checked />
                <Switch className={'mx-1'} color={'info'} outline checked />
                <Switch className={'mx-1'} color={'danger'} outline checked />
                <Switch className={'mx-1'} color={'light'} outline checked />
                <Switch className={'mx-1'} color={'dark'} outline checked />
                <Switch className={'mx-1'} color={'primary'} outline disabled />
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch outline pills
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CardHeader>
              <CardBody>
                <Switch className={'mx-1'} variant={'pill'} color={'primary'} outline checked />
                <Switch className={'mx-1'} variant={'pill'} color={'secondary'} outline checked />
                <Switch className={'mx-1'} variant={'pill'} color={'success'} outline checked />
                <Switch className={'mx-1'} variant={'pill'} color={'warning'} outline checked />
                <Switch className={'mx-1'} variant={'pill'} color={'info'} outline checked />
                <Switch className={'mx-1'} variant={'pill'} color={'danger'} outline checked />
                <Switch className={'mx-1'} variant={'pill'} color={'light'} outline checked />
                <Switch className={'mx-1'} variant={'pill'} color={'dark'} outline checked />
                <Switch className={'mx-1'} variant={'pill'} color={'primary'} outline disabled />
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch outline alternative
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CardHeader>
              <CardBody>
                <Switch className={'mx-1'} color={'primary'} outline={'alt'} checked />
                <Switch className={'mx-1'} color={'secondary'} outline={'alt'} checked />
                <Switch className={'mx-1'} color={'success'} outline={'alt'} checked />
                <Switch className={'mx-1'} color={'warning'} outline={'alt'} checked />
                <Switch className={'mx-1'} color={'info'} outline={'alt'} checked />
                <Switch className={'mx-1'} color={'danger'} outline={'alt'} checked />
                <Switch className={'mx-1'} color={'light'} outline={'alt'} checked />
                <Switch className={'mx-1'} color={'dark'} outline={'alt'} checked />
                <Switch className={'mx-1'} color={'primary'} outline={'alt'} disabled />
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch outline alternative - pills
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CardHeader>
              <CardBody>
                <Switch className={'mx-1'} variant={'pill'} color={'primary'} outline={'alt'} checked />
                <Switch className={'mx-1'} variant={'pill'} color={'secondary'} outline={'alt'} checked />
                <Switch className={'mx-1'} variant={'pill'} color={'success'} outline={'alt'} checked />
                <Switch className={'mx-1'} variant={'pill'} color={'warning'} outline={'alt'} checked />
                <Switch className={'mx-1'} variant={'pill'} color={'info'} outline={'alt'} checked />
                <Switch className={'mx-1'} variant={'pill'} color={'danger'} outline={'alt'} checked />
                <Switch className={'mx-1'} variant={'pill'} color={'light'} outline={'alt'} checked />
                <Switch className={'mx-1'} variant={'pill'} color={'dark'} outline={'alt'} checked />
                <Switch className={'mx-1'} variant={'pill'} color={'primary'} outline={'alt'} disabled />
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch with text
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CardHeader>
              <CardBody>
                <Switch className={'mx-1'} color={'primary'} label checked />
                <Switch className={'mx-1'} color={'secondary'} label checked />
                <Switch className={'mx-1'} color={'success'} label checked />
                <Switch className={'mx-1'} color={'warning'} label checked />
                <Switch className={'mx-1'} color={'info'} label checked />
                <Switch className={'mx-1'} color={'danger'} label checked />
                <Switch className={'mx-1'} color={'light'} label checked />
                <Switch className={'mx-1'} color={'dark'} label checked />
                <Switch className={'mx-1'} color={'primary'} label disabled />
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch with text pills
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CardHeader>
              <CardBody>
                <Switch className={'mx-1'} variant={'pill'} color={'primary'} label checked />
                <Switch className={'mx-1'} variant={'pill'} color={'secondary'} label checked />
                <Switch className={'mx-1'} variant={'pill'} color={'success'} label checked />
                <Switch className={'mx-1'} variant={'pill'} color={'warning'} label checked />
                <Switch className={'mx-1'} variant={'pill'} color={'info'} label checked />
                <Switch className={'mx-1'} variant={'pill'} color={'danger'} label checked />
                <Switch className={'mx-1'} variant={'pill'} color={'light'} label checked />
                <Switch className={'mx-1'} variant={'pill'} color={'dark'} label checked />
                <Switch className={'mx-1'} variant={'pill'} color={'primary'} label disabled />
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch with text outline
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CardHeader>
              <CardBody>
                <Switch className={'mx-1'} color={'primary'} outline label checked />
                <Switch className={'mx-1'} color={'secondary'} outline label checked />
                <Switch className={'mx-1'} color={'success'} outline label checked />
                <Switch className={'mx-1'} color={'warning'} outline label checked />
                <Switch className={'mx-1'} color={'info'} outline label checked />
                <Switch className={'mx-1'} color={'danger'} outline label checked />
                <Switch className={'mx-1'} color={'light'} outline label checked />
                <Switch className={'mx-1'} color={'dark'} outline label checked />
                <Switch className={'mx-1'} color={'primary'} outline label disabled />
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch with text outline pills
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CardHeader>
              <CardBody>
                <Switch className={'mx-1'} variant={'pill'} color={'primary'} outline label checked />
                <Switch className={'mx-1'} variant={'pill'} color={'secondary'} outline label checked />
                <Switch className={'mx-1'} variant={'pill'} color={'success'} outline label checked />
                <Switch className={'mx-1'} variant={'pill'} color={'warning'} outline label checked />
                <Switch className={'mx-1'} variant={'pill'} color={'info'} outline label checked />
                <Switch className={'mx-1'} variant={'pill'} color={'danger'} outline label checked />
                <Switch className={'mx-1'} variant={'pill'} color={'light'} outline label checked />
                <Switch className={'mx-1'} variant={'pill'} color={'dark'} outline label checked />
                <Switch className={'mx-1'} variant={'pill'} color={'primary'} outline label disabled />
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch with text outline alternative pills
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CardHeader>
              <CardBody>
                <Switch className={'mx-1'} color={'primary'} outline={'alt'} label checked />
                <Switch className={'mx-1'} color={'secondary'} outline={'alt'} label checked />
                <Switch className={'mx-1'} color={'success'} outline={'alt'} label checked />
                <Switch className={'mx-1'} color={'warning'} outline={'alt'} label checked />
                <Switch className={'mx-1'} color={'info'} outline={'alt'} label checked />
                <Switch className={'mx-1'} color={'danger'} outline={'alt'} label checked />
                <Switch className={'mx-1'} color={'light'} outline={'alt'} label checked />
                <Switch className={'mx-1'} color={'dark'} outline={'alt'} label checked />
                <Switch className={'mx-1'} color={'primary'} outline={'alt'} label disabled />
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch with text outline alternative pills
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CardHeader>
              <CardBody>
                <Switch className={'mx-1'} variant={'pill'} color={'primary'} outline={'alt'} label checked />
                <Switch className={'mx-1'} variant={'pill'} color={'secondary'} outline={'alt'} label checked />
                <Switch className={'mx-1'} variant={'pill'} color={'success'} outline={'alt'} label checked />
                <Switch className={'mx-1'} variant={'pill'} color={'warning'} outline={'alt'} label checked />
                <Switch className={'mx-1'} variant={'pill'} color={'info'} outline={'alt'} label checked />
                <Switch className={'mx-1'} variant={'pill'} color={'danger'} outline={'alt'} label checked />
                <Switch className={'mx-1'} variant={'pill'} color={'light'} outline={'alt'} label checked />
                <Switch className={'mx-1'} variant={'pill'} color={'dark'} outline={'alt'} label checked />
                <Switch className={'mx-1'} variant={'pill'} color={'primary'} outline={'alt'} label disabled />
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch with text outline alternative
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CardHeader>
              <CardBody>
                <Switch className={'mx-1'} color={'primary'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                <Switch className={'mx-1'} color={'secondary'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                <Switch className={'mx-1'} color={'success'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                <Switch className={'mx-1'} color={'warning'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                <Switch className={'mx-1'} color={'info'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                <Switch className={'mx-1'} color={'danger'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                <Switch className={'mx-1'} color={'light'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                <Switch className={'mx-1'} color={'dark'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                <Switch className={'mx-1'} color={'primary'} outline disabled label dataOn={'\u2713'} dataOff={'\u2715'}/>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch with text outline alternative pills
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CardHeader>
              <CardBody>
                <Switch className={'mx-1'} variant={'pill'} color={'primary'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                <Switch className={'mx-1'} variant={'pill'} color={'secondary'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                <Switch className={'mx-1'} variant={'pill'} color={'success'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                <Switch className={'mx-1'} variant={'pill'} color={'warning'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                <Switch className={'mx-1'} variant={'pill'} color={'info'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                <Switch className={'mx-1'} variant={'pill'} color={'danger'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                <Switch className={'mx-1'} variant={'pill'} color={'light'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                <Switch className={'mx-1'} variant={'pill'} color={'dark'} outline checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                <Switch className={'mx-1'} variant={'pill'} color={'primary'} outline disabled label dataOn={'\u2713'} dataOff={'\u2715'}/>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch with text outline alternative
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CardHeader>
              <CardBody>
                <Switch className={'mx-1'} color={'primary'} outline={'alt'} checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                <Switch className={'mx-1'} color={'secondary'} outline={'alt'} checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                <Switch className={'mx-1'} color={'success'} outline={'alt'} checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                <Switch className={'mx-1'} color={'warning'} outline={'alt'} checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                <Switch className={'mx-1'} color={'info'} outline={'alt'} checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                <Switch className={'mx-1'} color={'danger'} outline={'alt'} checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                <Switch className={'mx-1'} color={'light'} outline={'alt'} checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                <Switch className={'mx-1'} color={'dark'} outline={'alt'} checked label dataOn={'\u2713'} dataOff={'\u2715'}/>
                <Switch className={'mx-1'} color={'primary'} outline={'alt'} disabled label dataOn={'\u2713'} dataOff={'\u2715'}/>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                Switch with text outline alternative pills
                {' '}<a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro</a>
              </CardHeader>
              <CardBody>
                <Switch className={'mx-1'} variant={'pill'} color={'primary'} outline={'alt'} checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                <Switch className={'mx-1'} variant={'pill'} color={'secondary'} outline={'alt'} checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                <Switch className={'mx-1'} variant={'pill'} color={'success'} outline={'alt'} checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                <Switch className={'mx-1'} variant={'pill'} color={'warning'} outline={'alt'} checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                <Switch className={'mx-1'} variant={'pill'} color={'info'} outline={'alt'} checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                <Switch className={'mx-1'} variant={'pill'} color={'danger'} outline={'alt'} checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                <Switch className={'mx-1'} variant={'pill'} color={'light'} outline={'alt'} checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                <Switch className={'mx-1'} variant={'pill'} color={'dark'} outline={'alt'} checked label dataOn={'\u2713'} dataOff={'\u2715'} />
                <Switch className={'mx-1'} variant={'pill'} color={'primary'} outline={'alt'} disabled label dataOn={'\u2713'} dataOff={'\u2715'}/>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12">
            <Card>
              <CardHeader>
                Sizes
              </CardHeader>
              <CardBody className="p-0">
                <Table hover striped className="table-align-middle mb-0">
                  <thead>
                  <tr>
                    <th>Size</th>
                    <th>Example</th>
                    <th>Props</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>
                      Large
                    </td>
                    <td>
                      <Switch className={'mx-1'} variant={'3d'} color={'primary'} checked size={'lg'} />
                    </td>
                    <td>
                      Add <code>size={'lg'}</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Normal
                    </td>
                    <td>
                      <Switch className={'mx-1'} variant={'3d'} color={'primary'} checked  />
                    </td>
                    <td>
                      -
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Small
                    </td>
                    <td>
                      <Switch className={'mx-1'} variant={'3d'} color={'primary'} checked size={'sm'} />
                    </td>
                    <td>
                      Add <code>size={'sm'}</code>
                    </td>
                  </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>

        </Row>
      </div>

    );
  }
}

export default Switches;
