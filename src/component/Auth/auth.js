import React, { Component } from 'react';
import axios from 'axios';

let c = console.log

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      username: '',
      password: ''
     }

     this.handleChangeUsername = this.handleChangeUsername.bind(this);
     this.handleChangePassword = this.handleChangePassword.bind(this);
     this.handleLogin = this.handleLogin.bind(this);
  }

  handleChangeUsername(value) {
    c('USERNAME: ', value)
    this.setState({ username: value })
  }

  handleChangePassword(value) {
    c('PASSWORD: ', value)
    this.setState({ password: value })
  } 
  
  handleLogin() {
    c('login CLICK')
  }

  handleRegister() {
    c('Register CLICK: ')
  }

  render() { 
  
    return ( 
      <div>
        <p>Auth Component</p>

        <p>username:</p>
        <input value={ this.state.username } 
               onChange={ (e) => this.handleChangeUsername(e.target.value) } 
              placeholder='Enter usename'
        ></input>

        <p>Password:</p>
        <input value={ this.state.password } 
                onChange={ (e) => this.handleChangePassword(e.target.value) }
                placeholder='Enter password'
        ></input>



        <button onClick={ () => this.handleLogin() } >Login</button>
        <button onClick={ () => this.handleRegister() } >Register</button>
      </div>
     );
  }
}
 
export default Auth;