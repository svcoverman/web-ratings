import React from "react";
import "./Nav.css";

function Nav() {
 // const userInfo = Cookies.get('user');
  return (
    <div className="pure-menu pure-menu-horizontal navbar">
      <a href="/" className="pure-menu-heading pure-menu-link nav-item">Web Rates</a>
      <ul className="pure-menu-list">
        <li className="pure-menu-item"><a href="/home" className="pure-menu-link nav-item">Home</a></li>
        <li className="pure-menu-item"><a href="/login" className="pure-menu-link nav-item">Login</a></li>
      </ul>
    </div>
  );
}

export default Nav;