import React from "react";
import "./Nav.css";
import Cookies from "universal-cookie"

function Nav() {
 // const userInfo = Cookies.get('user');
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