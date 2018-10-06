import React, { Component } from 'react';

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

  // GET POST INFO


  }
  render() { 
    
    return ( 
      <div>
        <p>Post Component</p>
      </div>
     );
  }
}
 
export default Post;