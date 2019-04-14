import React from 'react';
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import PropTypes from 'prop-types';

import NavbarBrand from '../../components/NavbarBrand';
import HeaderDropdown from '../../components/HeaderDropdown';
import SidebarToggler from '../../components/SidebarToggler';
import AsideToggler from '../../components/AsideToggler';
import logo from '../../assets/img/brand/orca-logo3.svg';
import orca from '../../assets/img/brand/orca.png';
import avatar from '../../../public/assets/img/avatars/monopoly-run.png';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = { children: undefined };

export default function HeaderLayout(props) {
  // eslint-disable-next-line
  const { children, ...attributes } = props;

  return (
    <React.Fragment>
      <SidebarToggler className="d-lg-none" display="md" mobile />
      <NavbarBrand
        full={{
          src: logo,
          width: 89,
          height: 25,
          alt: 'CoreUI Logo',
        }}
        minimized={{
          src: orca,
          width: 45,
          height: 30,
          alt: 'CoreUI Logo',
        }}
      />{' '}
      <SidebarToggler className="d-md-down-none" display="lg" />
      <Nav className="d-md-down-none" navbar>
        <NavItem className="px-3">
          <NavLink href="/"> Dashboard </NavLink>{' '}
        </NavItem>{' '}
        <NavItem className="px-3">
          <NavLink href="#"> Settings </NavLink>{' '}
        </NavItem>{' '}
      </Nav>{' '}
      <Nav className="ml-auto" navbar>
        <NavItem className="d-md-down-none">
          <NavLink href="#">
            {' '}
            <i className="icon-bell" />
            <Badge pill color="danger">
              5
            </Badge>{' '}
          </NavLink>{' '}
        </NavItem>{' '}
        <NavItem className="d-md-down-none">
          <NavLink href="#">
            {' '}
            <i className="icon-list" />
          </NavLink>
        </NavItem>{' '}
        <NavItem className="d-md-down-none">
          <NavLink href="#">
            {' '}
            <i className="icon-location-pin" />
          </NavLink>
        </NavItem>{' '}
        <HeaderDropdown direction="down">
          <DropdownToggle nav>
            <img
              src={avatar}
              className="img-avatar"
              alt="admin@bootstrapmaster.com"
            />
          </DropdownToggle>{' '}
          <DropdownMenu
            right
            style={{
              right: 'auto',
            }}
          >
            <DropdownItem header tag="div" className="text-center">
              {' '}
              <strong> Account </strong>
            </DropdownItem>
            <DropdownItem>
              {' '}
              <i className="fa fa-bell-o" /> Updates
              <Badge color="info">42</Badge>{' '}
            </DropdownItem>{' '}
            <DropdownItem>
              {' '}
              <i className="fa fa-envelope-o" /> Messages
              <Badge color="success">42</Badge>{' '}
            </DropdownItem>{' '}
            <DropdownItem>
              {' '}
              <i className="fa fa-tasks" /> Tasks
              <Badge color="danger">42</Badge>{' '}
            </DropdownItem>{' '}
            <DropdownItem>
              {' '}
              <i className="fa fa-comments" /> Comments
              <Badge color="warning">42</Badge>{' '}
            </DropdownItem>{' '}
            <DropdownItem header tag="div" className="text-center">
              {' '}
              <strong> Settings </strong>
            </DropdownItem>
            <DropdownItem>
              {' '}
              <i className="fa fa-user" /> Profile
            </DropdownItem>
            <DropdownItem>
              {' '}
              <i className="fa fa-wrench" /> Settings
            </DropdownItem>
            <DropdownItem>
              {' '}
              <i className="fa fa-usd" /> Payments
              <Badge color="secondary">42</Badge>{' '}
            </DropdownItem>{' '}
            <DropdownItem>
              {' '}
              <i className="fa fa-file" /> Projects
              <Badge color="primary">42</Badge>{' '}
            </DropdownItem>{' '}
            <DropdownItem divider />
            <DropdownItem>
              {' '}
              <i className="fa fa-shield" /> Lock Account
            </DropdownItem>
            <DropdownItem>
              {' '}
              <i className="fa fa-lock" /> Logout
            </DropdownItem>
          </DropdownMenu>{' '}
        </HeaderDropdown>{' '}
      </Nav>{' '}
      <AsideToggler className="d-md-down-none" />{' '}
      {/* <AsideToggler className="d-lg-none" mobile /> */}{' '}
    </React.Fragment>
  );
}

HeaderLayout.propTypes = propTypes;
HeaderLayout.defaultProps = defaultProps;
