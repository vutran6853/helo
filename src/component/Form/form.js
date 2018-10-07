import React, { Component } from 'react';
import axios from 'axios';
var c = console.log

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: '',
      image: '',
      content: ''
     }
     this.handleChangeTitle = this.handleChangeTitle.bind(this);
     this.handleChangeImage = this.handleChangeImage.bind(this);
     this.handleChangeContent = this.handleChangeContent.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  handleChangeTitle(value) {
    // c("TITLE: ", value)
    this.setState({ title: value })
  }

  handleChangeImage(value) {
    this.setState({ image: value })

  }
  
  handleChangeContent(value) {
    this.setState({ content: value })
  }

  handleSubmit() {
    c(this.state)
    let { title, image, content } = this.state

    axios.post(`/api/posts/:userid`, { title: title, image: image, content: content })
    .then((response) => {
      console.log(response)
    })
     

  }

  render() { 

    return ( 
      <div>
        <p>New Post Component</p>
        <p>Title:</p>
        
        <input placeholder='Enter title' onChange={ (e) => this.handleChangeTitle(e.target.value) } ></input>

        <p>Image:</p>
        <input placeholder='Enter image' onChange={ (e) => this.handleChangeImage(e.target.value) } ></input>

        <p>Content:</p>
        <input placeholder='Enter Content' onChange={ (e) => this.handleChangeContent(e.target.value) } ></input>

        <button onClick={ () => this.handleSubmit() } >Post</button>
      </div>
     );
  }
}
 
export default Form;