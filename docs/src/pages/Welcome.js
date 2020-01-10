import React, { Component } from "react";
import Container from "../components/Container/Index";
import "./pages.css";
// import API from "../utils/API";

class Welcome extends Component {

    render() {
        return (
            <Container>
            <div className="splash-container">
                <div className="splash">
                    <h1 className="splash-head">Welcome to Web Rates</h1>
                        <p className="splash-subhead">
                            Web Rates allows you to post and view websites from all over the web! 
                            Leave your comments and ratings for the rest of the community to view!
                        </p>
                        <p>
                        <a href="/home" className="pure-button pure-button-primary">Get Started</a>
                        </p>
                </div>
            </div>
            <div className="content-wrapper">
                <div className="content">
                    <h2 className="content-head is-center">Web Rates Features</h2>
                </div>
            </div>
            
            </Container>
        );
    }
}

export default Welcome;
