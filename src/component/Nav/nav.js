import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <Link to='/dashboard' >
          <button>Home</button>
        </Link>

        <Link to='/post/:postid' >
          <button>New Post</button>
        </Link>

        <Link to='/dashboard' >
          <button>Logout</button>
        </Link>

      </div>
     );
  }
}
 
export default Nav;