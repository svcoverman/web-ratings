import React, { Component } from "react";
import Container from "../components/Container/Index";
import "./pages.css";
// import API from "../utils/API";

class Welcome extends Component {

    render() {
        return (
            <Container>
            <div class="splash-container">
                <div class="splash">
                    <h1 class="splash-head">Welcome to Web Rates</h1>
                        <p class="splash-subhead">
                            Web Rates allows you to post and view websites from all over the web! 
                            Leave your comments and ratings for the rest of the community to view!
                        </p>
                        <p>
                        <a href="/home" class="pure-button pure-button-primary">Get Started</a>
                        </p>
                </div>
            </div>
            
            </Container>
        );
    }
}

export default Welcome;
