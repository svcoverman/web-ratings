import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Details from "./pages/Details"
import Container from "./components/Container/Index"
import NoMatch from "./pages/NoMatch"

function App() {
  return (
    <Router>
      <div>
        <Container/>
          <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/login" componet={Login}/>
            <Route exact path="/:id" component={Details}/>
            <Route component={NoMatch}/>
          </Switch>
      </div>
    </Router>
  )
}

export default App;
