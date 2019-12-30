import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Website Rating List
      </a>
      <a href="/login" className="nav-item text-white ml-5">Login</a>
    </nav>
  );
}

export default Nav;