import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Auth from './component/Auth/auth'
import Dashboard from './component/Dashboard/dashboard';
import Post from './component/Post/post';
import Form from './component/Form/form';

export default(
 
    <Switch>
      <Route exact path='/' component={ Auth } ></Route>
      <Route path='/dashboard' component={ Dashboard } ></Route>
      <Route path='/post/:postid' component={ Post } ></Route>
      <Route path='/new' component={ Form } ></Route>
    </Switch>

)