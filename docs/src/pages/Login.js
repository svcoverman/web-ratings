import React, { Component } from "react";
import { Input, FormBtn } from "../components/Form";
import Container from "../components/Container/Index";
import './pages.css';
import GoogleLogin from 'react-google-login'
import Cookies from 'universal-cookie'

class Login extends Component {
  
    onLogin = response => {
    console.log(response)
    const userObject = {
        username: response.w3.ofa,
        email: response.profileObj.email
      }
//      Cookies.set('user', userObject);
      console.log(userObject)
    }

    onLoginFail = res => {
        console.warn('we broke it', res);
    }

    render() {
        return (
            <Container>
                <form id="loginForm">
                    <h4>User Name</h4>
                    <Input/>
                    <h4>Password</h4>
                    <Input/>
                    <FormBtn>Submit</FormBtn>
                </form>
                <div id="register">Don't have an account? <a id="account" href="/newUser">Click Here</a> to create one.</div>
                <GoogleLogin
                     clientId="540175169100-bdn8353ekr3bv72l71qkuaqsrgu8n562.apps.googleusercontent.com"
                     buttonText="Login"
                     onSuccess={this.onLogin}
                     onFailure={this.onLoginFail}
                     cookiePolicy={'single_host_origin'}       
                />,
            </Container>
            
        );
    }

}

export default Login;