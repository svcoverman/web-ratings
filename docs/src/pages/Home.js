import React, { Component } from "react";
import Module from "../components/module/Index"
import Filter from "../components/Filter/Index"
import Container from "../components/Container/Index";

class Home extends Component {

    render() {
        return (
            <Container>
                <Filter>
                    <h3>filter selectors</h3>
                </Filter>
                <Module>
                    <h3>List of Websites</h3>
                </Module>
            </Container>
        );
    }
}

export default Home;
