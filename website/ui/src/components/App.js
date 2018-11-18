import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import './../css/toolkit-inverse.css';

import logo from './../images/logo.svg';
import './../css/app.css';
import Nav from './Navigation/Nav';
import Main from './Main/Main';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    // this.callApi()
    //   .then(res => this.setState({ response: res.express }))
    //   .catch(err => console.log(err));
  }

  callApi = async () => {
    // const response = await fetch('/api/hello');
    // const body = await response.json();

    // if (response.status !== 200) throw Error(body.message);

    // return body;
  };

  render() {
    return (
      <div>
        <header className="brp">
          <Nav />
        </header>
        <div className="bw">
          <Main />
        </div>
      </div>
      // <div class="bw">
      //   <Overview />
      // </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">{this.state.response}</p>
      // </div>
    );
  }
}

export default App;
