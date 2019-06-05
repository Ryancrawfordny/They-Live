import React, { Component } from "react";
import "./Comments.css";
import axios from 'axios'

class Comments extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      apiDataLoaded: false
    };
  }

  componentDidMount = async () => {
    const comments = await axios.get("http://localhost:4567/comments");
    const apiData = comments.data;
    this.setState({ apiData, apiDataLoaded: true });
  };

  showCommentsOnPage() {
    return this.state.apiData.map(comment => {
      return <div> key={comment.id}
      <h1>{comment.comment}</h1>
      
      </div>
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.apiDataLoaded ? this.showCommentsOnPage() : <p>Lame</p>}
      </div>
    );
  }
}

export default Comments;
