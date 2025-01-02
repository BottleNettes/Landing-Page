import React from 'react';

const NavBar = () => (
  <nav className="bg-blue-600 p-4 text-white fixed w-full z-10">
    <ul className="flex justify-around">
      <li><a href="#about">About</a></li>
      <li><a href="#docs">Docs</a></li>
      <li><a href="#team">Team</a></li>
      <li><a href="#blog">Blog</a></li>
    </ul>
  </nav>
);

export default NavBar;