import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Auth from './component/Auth/auth';
import Dashboard from './component/Dashboard/dashboard';
import Post from './component/Post/post';
import Form from './component/Form/form';

export default(
  <div>
    <Switch>
      <Route exact path='/' Component={ Auth } ></Route>
      <Route path='/dashboard' Component={ Dashboard } ></Route>
      <Route path='/post/:postid' Component={ Post } ></Route>
      <Route path='/new' Component={ Form } ></Route>
    </Switch>
  </div>
)