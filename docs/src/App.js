import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Newuser from "./pages/Newuser"
import NoMatch from "./pages/NoMatch"
import Nav from "./components/Nav";
import "./App.css"

function App() {
  return (
    <Router>
      <div>
        <Nav />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/newUser" component={Newuser}/>
            <Route component={NoMatch}/>
          </Switch>
      </div>
    </Router>
  )
}

export default App;
