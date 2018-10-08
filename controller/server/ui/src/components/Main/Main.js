import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Overview from './../Overview/Overview';
import History from './../History/History';

class Main extends Component {
  render() {
    return (
        <Switch>
          <Route exact path='/' component={Overview}/>
          <Route exact path='/parameters' component={History}/>
        </Switch>
    );
  }
}

export default Main;