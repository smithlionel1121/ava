import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="nav container">
      <div className="container">
        <div>
          <h1>
            <Link to="/">
              <img src="/resources/Logo.svg" alt="" />
            </Link>
          </h1>
        </div>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>

          <Link to="/contact">
            <button>Log In</button>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
