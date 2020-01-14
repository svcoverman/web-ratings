import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import {  Container } from "../components/Grid";


class Websites extends Component {

  state = {
    website: "",
    // title: "",
    // URL: "",
    // thumbnail: "",
    // summary: "", 
    // category: "",
    // rating: "", 
    comments: []
  };

  // findId() {
  // const URLid = window.location.href.split("/").pop()
  // console.log(URLid)
  // }
 
  componentDidMount() {
    // this.findId();
    this.loadWebsite()
  }

  loadWebsite = () => {
    const id = window.location.href.split("/").pop()
    console.log(id)
    API.getWebsite(id)
      .then(res =>
        // console.log(res.data)
        this.setState({ 
          website: res.data,
      //     URL: res.data.URL, 
      //     thumbnail: res.data.thumbnail, 
      //     summary: res.data.summary,
      //     category: res.data.category,
      //     rating: res.data.rating,
      //     comments: res.data.comments
          comments: res.data.comments
        })
      )
      .catch(err => console.log(err));
      console.log(this.state.website)
  };

  render() {
    return (
      <Container>
        <div className="l-box pure-u-1 pure-u-md-1-1 pure-u-lg-1-1">
          <h1 id="webTitle">{this.state.website.title}</h1>
          <h3 className="webInfo-title"><a href={this.state.website.URL} target="blank">{this.state.website.URL}</a></h3>
        </div>
        <div className="webInfo l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
          <h2 className="webInfo-title">Website Description</h2>
          <h3><strong>Category: </strong>{this.state.website.category}</h3>
          <h3>{this.state.website.summary}</h3>
        </div>
        <div className="webInfo l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
          <img src={this.state.website.URL} alt="website"></img>
        </div>
        <div className=" webInfo l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
          <h2 className="webInfo-title">User Comments</h2>
          <h2><strong>Rating: </strong>{this.state.website.rating}/5</h2>
          {this.state.comments.map(comment => (
            <div class="comments">
            <h3>{comment.comment}</h3>
            <h3>-posted by {comment.user}</h3>
            </div>
          ))}
        </div>
      </Container>
	);
}
}
	

export default Websites;
