import React from "react";


function Menu() {
  return (
    <div className="pure-menu pure-menu-horizontal">
    <ul className="pure-menu-list">
        <li className="pure-menu-item pure-menu-selected"><button className="pure-button">Popular</button></li>
        <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
            <a href="/" id="menuLink1" className="pure-menu-link">Contact</a>
            <ul class="pure-menu-children">
                <li className="pure-menu-item"><buttton href="/" className="pure-menu-link">Email</buttton></li>
                <li className="pure-menu-item"><a href="/" className="pure-menu-link">Twitter</a></li>
                <li className="pure-menu-item"><a href="/" className="pure-menu-link">Tumblr Blog</a></li>
            </ul>
        </li>
    </ul>
</div>
  );
}

export default Menu;