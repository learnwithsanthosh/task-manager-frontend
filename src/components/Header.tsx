import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand fs-3 fw-bold">
              Task Manager
            </Link>
          </div>
          <ul className="navbar-nav flex-row gap-3">
            <li className="nav-item">
              <Link to="/" className="nav-link text-light px-0">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tasks" className="nav-link text-light px-0">
                Tasks
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
