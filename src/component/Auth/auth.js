import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
    // c('USERNAME: ', value)
    this.setState({ username: value })
  }

  handleChangePassword(value) {
    // c('PASSWORD: ', value)
    this.setState({ password: value })
  } 
  
  handleLogin() {
    let { username, password } = this.state
    c('Register CLICK: ', 'USERNAME: ', username, 'password: ', password)
    axios.post(`/api/auth/login/:userInfo`, { name: username, password: password })
    .then((response) => {
      console.log(response)
      c(this.props)
          // this.props.history.push('/dashboard');
    })
    .catch((error) => {
      console.log(`Oop Can't find Info, Please check form`, error)
    })
  }

  handleRegister() {
    let { username, password } = this.state
    let fullInfo = { username, password }
    // c(fullInfo)
    // c('Register CLICK: ', 'USERNAME: ', username, 'password: ', password)

    axios.post(`/api/auth/register/:userInfo`, { name: username, password: password } )
    .then((response) => {
      console.log(response)
    })
  }

  render() { 
    c(this.state)
    return ( 
      <div>
        <p>Auth Component</p>

        <p>username:</p>
        <input value={ this.state.username } 
              onChange={ (e) => this.handleChangeUsername(e.target.value) } 
              placeholder='Enter usename'
              type='text'
        ></input>

        <p>Password:</p>
        <input value={ this.state.password } 
                onChange={ (e) => this.handleChangePassword(e.target.value) }
                placeholder='Enter password'
                type='password'
        ></input>


      <Link to='/dashboard' >
        <button onClick={ () => this.handleLogin() } >Login</button>
      </Link>
      
      <Link to='/dashboard'>
        <button onClick={ () => this.handleRegister() } >Register</button>
      </Link>
        
      
     
     
      </div>
     );
  }
}
 
export default Auth;