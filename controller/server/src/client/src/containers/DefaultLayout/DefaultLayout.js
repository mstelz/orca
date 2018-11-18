import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppAside,
  AppSidebarForm
} from '@coreui/react';

import SidebarNav from '../../components/SideNavBar';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';
import DefaultAside from './DefaultAside';
import DefaultFooter from './DefaultFooter';
import DefaultHeader from './DefaultHeader';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';
import SidebarHeader from '../../components/SidebarHeader';
import SidebarFooter from '../../components/SidebarFooter';
import CustomBreadcrumb from '../../components/Breadcrumb';
import SidebarMinimizer from '../../components/SidebarMinimizer';

class DefaultLayout extends Component {
  render() {
    return (
      <div className="app">
        <Header fixed>
          <DefaultHeader />
        </Header>
        <div className="app-body">
          <Sidebar fixed display="lg">
            <SidebarHeader />
            <AppSidebarForm />
            <SidebarNav navConfig={navigation} {...this.props} />
            <SidebarFooter />
            <SidebarMinimizer />
          </Sidebar>
          <main className="main">
            <CustomBreadcrumb appRoutes={routes}/>
            <Container fluid>
              <Switch>
                {routes.map((route, idx) => {
                    return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                        <route.component {...props} />
                      )} />)
                      : (null);
                  },
                )}
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Container>
          </main>
          <AppAside fixed>
            <DefaultAside />
          </AppAside>
        </div>
        <Footer>
          <DefaultFooter />
        </Footer>
      </div>
    );
  }
}

export default DefaultLayout;
