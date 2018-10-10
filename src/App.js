import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import route from './route';
// import { HashRouter, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './duck/store';
import Nav from './component/Nav/nav';
import Form from './component/Form/form'
import Auth from './component/Auth/auth';
import Post from './component/Post/post';
import Dashboard from './component/Dashboard/dashboard';

class App extends Component {
  render() {
    return (

     
         
          
            <div className='sub_App' >
            { route }
            {/* <Auth/> */}

                
            {/* <Form/>
              <Post/>
              <Dashboard/>
           */}
            
            </div>
      
            


     
    );
  }
}

export default App;
