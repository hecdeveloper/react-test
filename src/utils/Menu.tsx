import React from "react";
import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">React Peliculas</NavLink>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/generos">
                        Generos
                    </NavLink>
                </li>
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
