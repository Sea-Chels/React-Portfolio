import React from 'react';

const Navbar = () => {
  return <nav>
            <ul id="navbar">
            <li><a href="/">About Me</a></li>
                <li><a className="active" href="/artwork">Artwork</a></li>
                <li><a href="/webdev">Web Development</a></li>
                <li><a href="/contact">Contact Me</a></li>
            </ul>
  </nav>;
};

export default Navbar;