import React, { Component } from "react";
import Module from "../components/module/Index"
import Filter from "../components/Filter/Index"
import Container from "../components/Container/Index";
import { Link } from "react-router-dom";
import Checkbox from "../components/Checkbox"
import API from "../utils/API";

const items = [
    'Popular',
    'Highest Rating',
    'Newest'
];

class Home extends Component {
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
            // console.log(res.data)
            this.setState({ websites: res.data, URL: "", thumbnail: "", summary: "" })
        )
        .catch(err => console.log(err));
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

    render() {
        return (
            <Container>
                <Filter>
                    <form onSubmit={this.handleFormSubmit}>
                        {this.renderCheckboxes()}
                    </form>
                    <label className="filter-item">Category:</label>
                    <select id="category" name="category" className="filter-item">
                        <option value="" disabled>Categories</option>
                        <option defaultValue="All" >All</option>
                        <option value="News" >News</option>
                        <option value="Sports">Sports</option>
                        <option value="Social">Social</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Travel">Travel</option>
                        <option value="Search">Travel</option>
                    </select>
                    <button className="pure-button pure-button-primary filter-item" type="submit">Apply</button>

                </Filter>
                <Module>
                    <h3 className="webInfo-title">List of Websites</h3>
                    <table className="pure-table pure-table-horizontal">
                        <thead>
                            <tr>
                                <th>website Name</th>
                                <th>Websites Details</th>
                                <th>Website Rating</th>
                                <th>Website Category</th>
                                <th>Website Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.websites.map(website => (
                                <tr>
                                <td>{website.title}</td>
                                <td><Link to={"/websites/" + website._id}>click here</Link></td>
                                <td>{website.rating}</td>
                                <td>{website.category}</td>
                                <td><a href={website.URL} target="blank">{website.URL}</a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Module>
            </Container>
        );
    }
}

export default Home;
