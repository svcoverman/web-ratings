import React, { Component } from "react";
import { Input, FormBtn, TextArea } from "../components/Form";
import API from "../utils/API";
import './pages.css';

class Create extends Component {

    state = {
        websites: [],
        URL: "",
        thumbnail: "",
        summary: ""
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
            <div>
                <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                    <form id="createForm">
                        <h4>Website Name</h4>
                        <Input
                            value={this.state.URL}
                            onChange={this.handleInputChange}
                            name="URL"
                            placeholder="URL (required)"
                        />
                        <h4>Website Link</h4>
                        <Input
                            value={this.state.URL}
                            onChange={this.handleInputChange}
                            name="URL"
                            placeholder="URL (required)"
                        />
                        <h4>Website Thumbnail</h4>
                        <Input
                            value={this.state.thumbnail}
                            onChange={this.handleInputChange}
                            name="thumbnail"
                            placeholder="Thumbnail (required)"
                        />
                        <h4>Website Category</h4>
                        <select id="category" name="category" id="categoryCreate">
                            <option value="" disabled>Categories</option>
                            <option value="News" >News</option>
                            <option value="Sports">Sports</option>
                            <option value="Social">Social</option>
                            <option value="Shopping">Shopping</option>
                            <option value="Travel">Travel</option>
                        </select>
                        <h4>Website Description</h4>
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
                            Create
                        </FormBtn>
                    </form>
                </div>
                <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4 userSites">
                    <div id="siteView">
                        <h3>Websites You have Posted</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;