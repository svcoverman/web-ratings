import React, { Component } from "react";
import Module from "../components/module/Index"
import Filter from "../components/Filter/Index"
import Container from "../components/Container/Index";
import { List, ListItem } from "../components/List";
import Checkbox from "../components/Checkbox"


const items = [
    'Popular',
    'Highest Rating',
    'Newest'
];

class Home extends Component {
    state = {
        websites: [],
        category: "",
        description: "",
        link: "",
        image: ""
    };

    componentWillMount = () => {
        this.selectedBoxes = new Set();
    }

    toggleBox = label => {
        if (this.selectedBoxes.has(label)) {
            this.selectedBoxes.delete(label);
        } else {
            this.selectedBoxes.add(label);
        }
    }

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        for (const box of this.selectedBoxes) {
            console.log(box, 'is chosen');
        }
    }

    createCheckbox = label => (
        <Checkbox
            label={label}
            handleCheck={this.toggleBox}
            key={label}
            />
    )

    renderCheckboxes = () => (
        items.map(this.createCheckbox)
    )

    // componentDidMount() {
    //     this.loadSites();
    // };

    // loadSites = () => {
    //     API.getSites()
    //         .then(res =>
    //             this.setState({
    //                 websites: res.data,
    //                 category: "",
    //                 description: "",
    //                 link: "",
    //                 image: "" 
    //             })
    //             )
    //             .catch(err => console.log(err));
    // };

    render() {
        return (
            <Container>
                <Filter>
                    <form onSubmit={this.handleFormSubmit}>
                        {this.renderCheckboxes()}
                        <button className="btn btn default" type="submit">Apply</button>
                    </form>
                </Filter>
                <Module>
                    <h3>List of Websites</h3>
                    <List>
                        {this.state.websites.map(website => (
                            <ListItem key={website._id}>
                                {website.title}
                            </ListItem>
                        ))}
                    </List>
                </Module>
            </Container>
        );
    }
}

export default Home;
