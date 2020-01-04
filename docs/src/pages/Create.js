import React, { Component } from "react";
import { Input, FormBtn, TextArea } from "../components/Form";
import Container from "../components/Container/Index";
import './pages.css';

class Create extends Component {

    render() {
        return (
            <Container>
                <form id="createForm">
                    <h4>Website Name</h4>
                    <Input/>
                    <h4>Website Link</h4>
                    <Input/>
                    <h4>Website Thumbnail</h4>
                    <Input/>
                    <h4>Website Category</h4>
                    <Input/>
                    <h4>Website Description</h4>
                    <TextArea/>
                    <FormBtn>Create</FormBtn>
                </form>
            </Container>
        );
    }
}

export default Create;