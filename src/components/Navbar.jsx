import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg px-2">
      <NavLink to="/" className="navbar-brand">
        crypto jagat{" "}
      </NavLink>

      <ul className="navbar-nav">
        <li className="nav-item active">
          <NavLink to="/" className="nav-link">
            Home{" "}
          </NavLink>
        </li>
        <li className="nav-item active">
          <NavLink to="/cryptocurrencies" className="nav-link">
            Cryptos{" "}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/news" className="nav-link">
            News{" "}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
