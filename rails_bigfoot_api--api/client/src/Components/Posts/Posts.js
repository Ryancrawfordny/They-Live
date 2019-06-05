import React, { Component } from "react";
import "./Posts.css";
import axios from 'axios'
import { createPosts, getAllPosts } from '../../Services/postService'



class Posts extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      apiDataLoaded: false,
      post: '',
      comment: ''
    };
  }

  componentDidMount = async () => {
    const posts = await axios.get("http://localhost:4567/posts");
    const apiData = posts.data;
    this.setState({ apiData, apiDataLoaded: true });
  };

  showPostsOnPage = () => {
    return this.state.apiData.map((data,index) => {
      return <div key={index}>
      <h1>{data.post.post}</h1>
      {/* <h1>{data.comments[0].comment}</h1> */}

      </div>
    });
  }

  handleTextInput = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value

    this.setState(state => {
      return { [fieldName]: value}
    })
  }

  handleSubmitForm = async (e) => {
    e.preventDefault()

    const { post, comment, apiData } = this.state;

    let newPost = {
      post: post,
      user_id: 1
      // comment: comment
    }
    let newComment = {
      comment: comment
    }

    const resPost = await createPosts(newPost);
    //  await axios.post("http://localhost:4567/posts", newPost);
      // const posts = await getAllPosts()
      // this.setState({
      //   apiData: posts
      // })

      apiData.push(resPost)
      console.log("apiData",apiData)
      await this.setState({
        apiData
      })


  }

  render() {
    return (
      
      <div className="App">
      <form className= 'post-form' onSubmit={this.handleSubmitForm} >
      <div>
        <input className='post-input' type='text' name='post' onChange={this.handleTextInput}></input>
      </div>
      <div>
      <input className='comment-input' type='text' name='comment' onChange={this.handleTextInput}></input>
      </div>
      <button className='post-button'>Create Post</button>
      <button className='edit-button'>Edit Post</button>
      <button className='delete-button'>Delete Post</button>
      </form>
        {this.state.apiDataLoaded ? this.showPostsOnPage() : <p>Lame</p>}
      </div>
    );
  }
}

export default Posts;

