import React, { Component } from "react";
import "./Posts.css";
import axios from "axios";
import {createPosts,getAllPosts,deletePosts,updatePosts,getPosts} from "../../Services/postService";

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      apiDataLoaded: false,
      post: "",
      comment: "",
      show: false
    };
  }

  componentDidMount = async () => {
    const posts = await axios.get("http://localhost:4567/posts");
    const apiData = posts.data;
    this.setState({ apiData, apiDataLoaded: true });
    console.log(this.state.apiData[0])

  };

  onDeleteClick = async (e) => {
    await deletePosts(e.target.id);
    let allPosts = await getAllPosts() 
    this.setState({apiData: allPosts})
  };

  onEditClick = async (e) => {
    console.log("hello")

    e.preventDefault()
    const id = this.state.id
    let updatedPost = {
      post: this.state.post
    }
    await updatePosts(id, updatedPost);
    let allPosts = await getAllPosts()
    this.setState({apiData: allPosts})
    this.hideModal()
  }

  onPostFormChange = (e) => {
    const element = e.target
    const name = element.name
    let value = element.value

    const newState = {}
    newState[name] = value

    this.setState(newState);
  }

  showPostsOnPage = () => {
    return this.state.apiData.map((data, index) => {
      return (
        <div key={index}>
          <h1>{data.post.post}</h1>
          <button className="edit-button" value={data.post.id} onClick={this.showModal}>
            Edit Post
          </button>
          <button
            className="delete-button"
            id={data.post.id}
            onClick={this.onDeleteClick}
          >
            Delete Post
          </button>
        </div>
      );
    });
  };

  handleTextInput = e => {
    const fieldName = e.target.name;
    const value = e.target.value;

    this.setState(state => {
      return { [fieldName]: value };
    });
  };

  showModal = async (e) => {
    const id = e.target.value
    const posts = await getPosts(id)
    this.setState({
      show: true,
      id: id,
      posts: posts
    })
  }

  hideModal = () => {
    this.setState({
      show: false
    })
  }

  handleSubmitForm = async e => {
    e.preventDefault();
    const { post, comment, apiData } = this.state;
    let newPost = {
      post: post,
      
      // comment: comment
};
    let newComment = {
      comment: comment
    };

    const resPost = await createPosts(newPost);

    apiData.push(resPost);
    console.log("apiData", apiData);
    await this.setState({
      apiData
    });
  };

  render() {
    const modal = (this.state.show) ?
    <div className='modal'>
    <section className='modal-content'>
    <form onSubmit={e => this.onEditClick(e)}>
    <label htmlFor='name'> <input type='text' name='post' onChange={this.onPostFormChange}></input>
    </label>
    <button type='button' onClick={this.hideModal}>Update</button>
    </form>
    </section>
    </div> :null;
    return (
      <div className="App">
        <form className="post-form" onSubmit={this.handleSubmitForm}>
          <div>
            <input
              className="post-input"
              type="text"
              name="post"
              onChange={this.handleTextInput}
            />
          </div>
          <div>
            <input
              className="comment-input"
              type="text"
              name="comment"
              onChange={this.handleTextInput}
            />
          </div>
          <button className="post-button">Create Post</button>
        </form>
        {this.state.apiDataLoaded ? this.showPostsOnPage() : <p>Lame</p>}
        {modal}
      </div>
    );
  }
}

export default Posts;
