import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Details from "./pages/Details"
import Container from "./components/Container/Index"
import NoMatch from "./pages/NoMatch"
import Nav from "./components/Nav";
import "./App.css"

function App() {
  return (
    <Router>
      <div>
        <Container/>
        <Nav />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" componet={Login}/>
            <Route exact path="/:id" component={Details}/>
            <Route component={NoMatch}/>
          </Switch>
      </div>
    </Router>
  )
}

export default App;
