import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import route from './route';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './duck/store';
import Nav from './component/Nav/nav';
import Form from './component/Form/form'
import Auth from './component/Auth/auth';
class App extends Component {
  render() {
    return (

      <Provider >
        <HashRouter>
          <div className="App">
            <Nav/>
              {/* <Form/> */}
              <Auth/>
            { route }
          </div>
        </HashRouter>
      </Provider>
     
    );
  }
}

export default App;
