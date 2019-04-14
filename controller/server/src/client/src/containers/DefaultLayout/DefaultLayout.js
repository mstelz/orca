import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import SidebarForm from '../../components/SidebarForm';
import Aside from '../../components/Aside';
import SidebarNav from '../../components/SideNavBar';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';
import DefaultAside from './DefaultAside';
import FooterLayout from './FooterLayout';
import HeaderLayout from './HeaderLayout';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';
import SidebarHeader from '../../components/SidebarHeader';
import SidebarFooter from '../../components/SidebarFooter';
import CustomBreadcrumb from '../../components/Breadcrumb';
import SidebarMinimizer from '../../components/SidebarMinimizer';

export default function DefaultLayout(props) {
  return (
    <div className="app">
      <Header fixed>
        <HeaderLayout />
      </Header>
      <div className="app-body">
        <Sidebar fixed display="lg">
          <SidebarHeader />
          <SidebarForm />
          <SidebarNav navConfig={navigation} {...props} />
          <SidebarFooter />
          <SidebarMinimizer />
        </Sidebar>
        <main className="main">
          <CustomBreadcrumb appRoutes={routes} />
          <Container fluid>
            <Switch>
              {routes.map(route => {
                return route.component ? (
                  <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={p => <route.component {...p} />}
                  />
                ) : null;
              })}
              <Redirect from="/" to="/dashboard" />
            </Switch>
          </Container>
        </main>
        <Aside fixed>
          <DefaultAside />
        </Aside>
      </div>
      <Footer>
        <FooterLayout />
      </Footer>
    </div>
  );
}
