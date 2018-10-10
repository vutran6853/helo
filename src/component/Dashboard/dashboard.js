import React, { Component } from 'react';
import axios from 'axios';
// import Form from '../Form/form'
import css from './dashboard.css';
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      posts: [],
      search: '',
      userposts: true,
      
     }
  }

  // GET POST INFO
  componentDidMount() {
    axios.get(`/api/post/1`)
    .then((response) => {
      console.log(response)
      this.setState({ posts: response.data })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  // componentDidUpdate(prevProps, prevState) {
  //   let { posts } = this.state;
  //   console.log('prevProps: ', prevProps)
  //   console.log('prevState: ', prevState) 
  //   let newUpdateData = [];
  //   if(prevProps != prevState) {
  //     console.log('NOT SAME')
  //    for(let i = 0; i < prevProps.length; i++) {
  //      console.log(prevProps[i])
  //     newUpdateData.push(prevProps[i])
  //    }
  //    posts.push(newUpdateData);

  //   } else {
  //     console.log('SAME');
  //     // let prevState = prevState;
  //     // console.log(prevState);

  //   }
  // }

  handleDeletePost(id) {
    console.log('ID: ', id)
    axios.delete(`/api/posts/${ id }`)
    .then((response) => {
      console.log(response)
    })
  }

  render() { 
    let { posts } = this.state;
    // console.log(posts);

    let displayPost = posts.map((value, index) => {
      console.log('VALUE: ', value, 'INDEX: ', index)
      return(
        <div key={ index } className='displayPostBox'>
          <p>{ value.posts_title }</p>
          <img src={ value.posts_image } ></img>
          <p>{ value.posts_content }</p>
          <button onClick={ () => this.handleDeletePost(value.posts_id) } >Delete</button>
        </div>
      )
    })




    return ( 
      <div className='dashboardBox' >
        <p>Dashboard Component</p>
          { displayPost }
        
      </div>
     );
  }
}
 
export default Dashboard;