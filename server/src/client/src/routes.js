import React from 'react';
import Loadable from 'react-loadable';

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const Dashboard = Loadable({
  loader: () => import('./views/Dashboard/Dashboard'),
  loading: Loading,
});

const CoreUIIcons = Loadable({
  loader: () => import('./views/Icons/CoreUIIcons'),
  loading: Loading,
});

const FontAwesome = Loadable({
  loader: () => import('./views/Icons/FontAwesome'),
  loading: Loading,
});

const SimpleLineIcons = Loadable({
  loader: () => import('./views/Icons/SimpleLineIcons'),
  loading: Loading,
});

const Users = Loadable({
  loader: () => import('./views/Users/Users'),
  loading: Loading,
});

const User = Loadable({
  loader: () => import('./views/Users/User'),
  loading: Loading,
});

// ADDED

const Bluetooth = Loadable({
  loader: () => import('./views/Config/Bluetooth'),
  loading: Loading,
});

const Settings = Loadable({
  loader: () => import('./views/Config/Settings'),
  loading: Loading,
});

const Temperature = Loadable({
  loader: () => import('./views/Modules/Temperature'),
  loading: Loading,
});

const Outlets = Loadable({
  loader: () => import('./views/Outlets/Outlets'),
  loading: Loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/config/bluetooth', name: 'Bluetooth', component: Bluetooth },
  { path: '/config/settings', name: 'Settings', component: Settings },
  { path: '/modules/temperature', name: 'Temperature', component: Temperature },
  { path: '/outlets', name: 'Outlets', component: Outlets },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  {
    path: '/icons/simple-line-icons',
    name: 'Simple Line Icons',
    component: SimpleLineIcons,
  },
  { path: '/users', exact: true, name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
