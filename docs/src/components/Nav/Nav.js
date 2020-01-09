import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar text-black" href="/">
        Web Rates
      </a>
      <a href="/login" className="nav-item">Login</a>
    </nav>
  );
}

export default Nav;