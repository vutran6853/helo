import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter, Route, BrowserRouter  } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './duck/store';

ReactDOM.render(
  <BrowserRouter >
  <Provider>

      <App />
    

  </Provider>
  </BrowserRouter>
  
  
  , document.getElementById('root'));

