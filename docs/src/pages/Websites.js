import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn} from "../components/Form";


class Websites extends Component {
  state = {
    websites: [],
    URL: "",
    thumbnail: "",
    summary: ""
  };

  componentDidMount() {
    this.loadWebsites();
  }

  loadWebsites = () => {
    API.getWebsites()
      .then(res =>
        this.setState({ websites: res.data, URL: "", thumbnail: "", summary: "" })
      )
      .catch(err => console.log(err));
  };

  deleteWebsite = id => {
    API.deleteWebsite(id)
      .then(res => this.loadWebsites())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.URL && this.state.thumbnail) {
      API.saveWebsite({
        URL: this.state.URL,
        thumbnail: this.state.thumbnail,
        summary: this.state.summary
      })
        .then(res => this.loadWebsites())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
          <Jumbotron>
              <h1>What Websites Would You like to Rate?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.URL}
                onChange={this.handleInputChange}
                name="URL"
                placeholder="URL (required)"
              />
              <Input
                value={this.state.thumbnail}
                onChange={this.handleInputChange}
                name="thumbnail"
                placeholder="Thumbnail (required)"
              />
              <TextArea
                value={this.state.summary}
                onChange={this.handleInputChange}
                name="summary"
                placeholder="Summary (Optional)"
              />
              <FormBtn
                disabled={!(this.state.thumbnail && this.state.URL)}
                onClick={this.handleFormSubmit}
              >
                Submit Website
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
          <Jumbotron>
              <h1>Websites On My List</h1>
            </Jumbotron>
			  {this.state.websites.length ? (
              <List>
                {this.state.websites.map(website => (
                  <ListItem key={website._id}>
                    <Link to={"/websites/" + website._id}>
                      <strong>
                        {website.URL} by {website.thumbnail}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteWebsite(website._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
	);
}
}
	

export default Websites;
