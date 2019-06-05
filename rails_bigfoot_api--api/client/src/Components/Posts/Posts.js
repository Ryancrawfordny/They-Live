import React, { Component } from "react";
import "./Posts.css";
import axios from 'axios'


class Posts extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      apiDataLoaded: false
    };
  }

  componentDidMount = async () => {
    const posts = await axios.get("http://localhost:4567/posts");
    const apiData = posts.data;
    this.setState({ apiData, apiDataLoaded: true });
  };

  showPostsOnPage() {
    return this.state.apiData.map(data => {
      return <div key={data.post.id}>
      <h1>{data.post.post}</h1>
      <h1>{data.comments[0].comment}</h1>

      </div>
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.apiDataLoaded ? this.showPostsOnPage() : <p>Lame</p>}
      </div>
    );
  }
}

export default Posts;

