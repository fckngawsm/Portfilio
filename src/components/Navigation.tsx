import React from "react";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <nav className="navigation">
      <li className="navigation__link">
        <Link className="link" to="/">
          home
        </Link>
      </li>
      <li className="navigation__link">
        <Link className="link" to="/stack">
          stack
        </Link>
      </li>
      <li className="navigation__link">
        <Link className="link" to="/projects">
          project
        </Link>
      </li>
      <li className="navigation__link">
        <Link className="link" to="/contact">
          contact
        </Link>
      </li>
    </nav>
  );
}

export default Navigation;
