import React, { Component } from "react";
import { Input, FormBtn } from "../components/Form";
import Container from "../components/Container/Index";
import './pages.css';

class Newuser extends Component {

    render() {
        return (
            <Container>
                <form id="userForm">
                    <h4>Email</h4>
                    <Input/>
                    <h4>User Name</h4>
                    <Input/>
                    <h4>Password</h4>
                    <Input/>
                    <h4>Retype Password</h4>
                    <Input/>
                    <FormBtn>Create</FormBtn>
                </form>
            </Container>
        );
    }
}

export default Newuser;