import React, { Component } from 'react';
import axios from 'axios';
// import Form from '../Form/form'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      posts: [],
      search: '',
      userposts: true,
      
     }
  }

// GET ALL POST FROM DATABASE
  componentDidMount() {
    // this.grabPosts();

  }


  render() { 
  
    return ( 
      <div>
        <p>Dashboard Component</p>
        
      </div>
     );
  }
}
 
export default Dashboard;