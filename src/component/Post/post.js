import React, { Component } from 'react';
import axios from 'axios';
import css from './post.css';


class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: '',
      image: '',
      content: '',
      author: '',
      authorPicture: ''
     }
  }

  render() { 
    
    return ( 
      <div className='postBox' >
        <p>Post Component</p>
      </div>
     );
  }
}
 
export default Post;