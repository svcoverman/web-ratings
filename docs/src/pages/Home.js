import React, { Component } from "react";
import Module from "../components/module/Index"
import Filter from "../components/Filter/Index"
import Container from "../components/Container/Index";
import { Link } from "react-router-dom";
import Checkbox from "../components/Checkbox"
import API from "../utils/API";

// array of filter names//
const items = [
    'Popular',
    'Highest Rating',
    'Newest'
];

class Home extends Component {
    state = {
        websites: [],
        filteredSites: [],
        Checkbox: "",
        category: ""
    };

    componentDidMount() {
        this.loadWebsites();
    }
    
    componentWillMount = () => {
        this.selectedBoxes = new Set();
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    };

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        for (const box of this.selectedBoxes) {
            console.log(box, 'is chosen');
        }
    }

    //retrieve website data from API
    loadWebsites = () => {
        API.getWebsites()
        .then(res =>
            this.setState({ websites: res.data, filteredSites: res.data })
        )
        .catch(err => console.log(err));
        
    };

    //for checking and unchecking boxes 
    toggleBox = label => {
        if (this.selectedBoxes.has(label)) {
            this.selectedBoxes.delete(label);
        } else {
            this.selectedBoxes.add(label);
            this.setState({ checkbox: label })
            console.log(this.state.checkbox)
        }
    }
    
    // uses list array to create checkboxes
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
    
    //functionality for applying filters
    applyFilters = () => {
        let filterArray = []
        let hasCategory = false
        let hasCheck = false
        if (this.state.category === "Search") {
            filterArray.push("Search")
            hasCategory = true
        }
        if (this.state.category === "Sports") {
            filterArray.push("Sports")
            hasCategory = true
        }
        if (this.state.category === "News") {
            filterArray.push("News")
            hasCategory = true
        }
        if (this.state.category === "Social") {
            filterArray.push("Social")
            hasCategory = true
        }
        if (this.state.category === "Travel") {
            filterArray.push("Travel")
            hasCategory = true
        }
        if (this.state.category === "Shopping") {
            filterArray.push("Shopping")
            hasCategory = true
        }
        if (this.state.checkbox === "Highest Rating") {
            filterArray.push("Highest Rating")
            hasCheck = true 
        }
        if (this.state.checkbox === "Popular") {
            filterArray.push("Popular")
            hasCheck = true
        }
        if (this.state.checkbox === "Newest") {
            filterArray.push("Newest")
            hasCheck = true
        }
        if (hasCategory === true && hasCheck === false) {
            console.log(filterArray)
            let categoryArray = this.state.websites.filter(website => website.category === filterArray[0])
            this.setState({ filteredSites: categoryArray})
        }
        if (hasCategory === false && hasCheck === true) {
            let sortedArray = []
            if (filterArray[0] === "Highest Rating") {
                sortedArray = this.state.websites.sort((a,b) => (b.rating - a.rating))
                this.setState({ filteredSites: sortedArray})
            }
            else if (filterArray[0] === "Popular") {
                sortedArray = this.state.websites.sort((a,b) => (b.visits - a.visits))
                this.setState({ filteredSites: sortedArray})
            }
            else if (filterArray[0] === "Newest") {
                sortedArray = this.state.websites.sort((a,b) => (b.date > a.date))
                this.setState({ filteredSites: sortedArray})
            }
        }
        if (hasCategory === true && hasCheck === true) {
            console.log(filterArray)
            let sortedArray = []
            let categoryArray = this.state.websites.filter(website => website.category === filterArray[0])
            if (filterArray[1] === "Highest Rating") {
                sortedArray = categoryArray.sort((a,b) => (b.rating - a.rating))
                this.setState({ filteredSites: sortedArray})
            }
            else if (filterArray[1] === "Popular") {
                sortedArray = categoryArray.sort((a,b) => (b.visits - a.visits))
                this.setState({ filteredSites: sortedArray})
            }
            else if (filterArray[1] === "Newest") {
                sortedArray = categoryArray.sort((a,b) => (b.date > a.date))
                this.setState({ filteredSites: sortedArray})
            }
            
        }
    }
    
    removeFilter = () => {
        window.location.reload();
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
                    <button className="pure-button pure-button-primary filter-item" onClick={this.applyFilters} type="submit">Apply</button>
                    <button className="pure-button pure-button-primary filter-item" onClick={this.removeFilter}>Reset Filters</button>

                </Filter>
                <Module>
                    <h3 className="webInfo-title">List of Websites</h3>
                    <table className="pure-table pure-table-horizontal">
                        <thead>
                            <tr>
                                <th>Website  Names</th>
                                <th>Websites Details</th>
                                <th>Website Rating</th>
                                <th>Average Daily Visits</th>
                                <th>Website Category</th>
                                <th>Website Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.filteredSites.map(website => (
                                <tr key={website._id}>
                                <td>{website.title}</td>
                                <td><Link to={"/websites/" + website._id}>click here</Link></td>
                                <td>{website.rating}</td>
                                <td>{website.visits}</td>
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
