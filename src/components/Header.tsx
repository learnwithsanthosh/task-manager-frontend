import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link> | <Link to="/task">Task</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
