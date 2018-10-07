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




  // GET POST INFO
  componentDidMount() {
    axios.get(`/api/post/1`)
    .then((response) => {
      console.log(response)
    })
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