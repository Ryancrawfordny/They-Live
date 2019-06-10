import React, { Component } from "react";
import "./Posts.css";
import axios from "axios";
import {createPosts,getAllPosts,deletePosts,updatePosts,getPosts} from "../../Services/postService";
import { isNullOrUndefined } from "util";

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      apiDataLoaded: false,
      post: "",
      comment: "",
      show: false,
      editIndex: 0,
      editedData: null
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

  onEditClick = async () => {
    console.log("hello")

    //e.preventDefault()
    // const id = this.state.id
    // let updatedPost = {
    //   post: this.state.post
    // }
    // await updatePosts(id, updatedPost);
    const { editedData } = this.state;
   
    console.log(editedData)
    const resPost = await updatePosts(editedData.post.id,editedData.post);
    // let allPosts = await getAllPosts()
    // this.setState({apiData: allPosts})
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
  onEditFormChange = (e) => {
    const element = e.target
    const name = element.name
    let value = element.value
    const {editedData, apiData, editIndex} = this.state
    editedData.post[name] = value
    apiData[editIndex] = {...editedData}


    this.setState({
      apiData,
      editedData: {...editedData}
    });
  }

  showPostsOnPage = () => {
    return this.state.apiData.map((data, index) => {
      return (
        
        
        <div key={index} className="comment">
        <p>{data.post.post}</p>
          <button className="edit-button" value={data.post.id} onClick={(e) => this.showModal(e,index)}>
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

  showModal = async (e, editIndex) => {
    const id = e.target.value
    console.log("index", editIndex)
    const editedData = this.state.apiData[editIndex]
    await this.setState({
      show: true,
      id: id,
      editIndex,
      editedData, 
      
    })
  }

  hideModal = async(e) => {
    //e.preventDefault();

    await this.onEditClick()
    await this.setState({
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
    this.setState({
      apiData
    });
  };

  handleEditSubmitForm = async e => {
    e.preventDefault();
    const { editedData } = this.state;
   

    const resPost = await updatePosts(editedData.post.id,editedData.post);

    console.log("resPost", resPost);
  
  };

  render() {
    const {editedData} = this.state
    const modal = (this.state.show) ?
    <div className='modal'>
    <section className='modal-content'>
    <form onSubmit={this.onEditClick}>
    <label htmlFor='name'> 
      <input type='text' name='post' value={editedData.post.post} onChange={this.onEditFormChange}></input>
    </label>
    <button type='submit' onClick={this.hideModal}>Update</button>
    </form>
    </section>
    </div> :null;


    return (
      <div className="App">
      <h1 className='post-h1'>Tell Us About Your Encounter</h1>
        <form className="post-form" onSubmit={this.handleSubmitForm}>
          <div>
            <textarea
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
