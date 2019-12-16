import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Signup</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/secretpage">SecretPage</NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
