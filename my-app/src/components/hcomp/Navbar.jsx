import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">Headers</Link>
      </div>

      <ul>
        <li>
          <Link to="/">Startup1</Link>
        </li>
        <li>
          <Link to="/Startup2">Startup2</Link>
        </li>
        <li>
          <Link to="/Startup3">Startup3</Link>
        </li>
        <li>
          <Link to="/Startup4">Startup4</Link>
        </li>
        <li>
          <Link to="/Startup5">Startup5</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
