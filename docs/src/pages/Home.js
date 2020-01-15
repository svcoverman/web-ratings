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
        Checkbox: "",
        category: ""
    };

    componentDidMount() {
        this.loadWebsites();
    }
    
    loadWebsites = () => {
        API.getWebsites()
        .then(res =>
            this.setState({ websites: res.data })
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
            this.setState({ checkbox: label })
            console.log(this.state.checkbox)
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
            onChange={this.handleInputChange}
            />
    )

    renderCheckboxes = () => (
        items.map(this.createCheckbox)
    )

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        })
      };

    applyFilter = () => {
        console.log(this.state.checkbox)
        let filterArray = []
        if (this.state.category === "All") {
            this.removeFilter()
        }
        else if (this.state.checkbox === "Highest Rating") {
            filterArray = this.state.websites.sort((a,b) => (b.rating - a.rating))
            console.log(filterArray)
            this.setState({ websites: filterArray})
        }
        else if (this.state.checkbox === "") {
            filterArray = this.state.websites.filter(website => website.category === this.state.category)} 
            console.log(filterArray)
            this.setState({ websites: filterArray})
    }

    removeFilter = () => {
        if (this.state.category === "All") {
            console.log("No filters applied")
        }
        else {
            this.loadWebsites()
        }
    }

    render() {
        return (
            <Container>
                <Filter>
                    <form onSubmit={this.handleFormSubmit}>
                        {this.renderCheckboxes()}
                    </form>
                    <label className="filter-item">Category:</label>
                    <select id="category" name="category" className="filter-item"
                    onChange={this.handleInputChange}>
                        <option value="" disabled>Categories</option>
                        <option defaultValue="All" >All</option>
                        <option value="News" >News</option>
                        <option value="Sports">Sports</option>
                        <option value="Social">Social</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Travel">Travel</option>
                        <option value="Search">Search</option>
                    </select>
                    <button className="pure-button pure-button-primary filter-item" onClick={this.applyFilter} type="submit">Apply</button>
                    <button className="pure-button pure-button-primary filter-item" onClick={this.removeFilter}>Reset Filters</button>

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
                                <tr key={website._id}>
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
