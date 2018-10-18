import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Overview from './../../pages/Overview';
import History from '../../pages/History';
import Video from './../../pages/Video';
import Statistics from './../../pages/Statistics';

class Main extends Component {
  render() {
    return (
        <Switch>
          <Route exact path='/' component={Overview}/>
          <Route exact path='/parameters' component={History}/>
          <Route exact path='/video' component={Video} />
          <Route exact path='/statistics' component={Statistics} />
        </Switch>
    );
  }
}

export default Main;