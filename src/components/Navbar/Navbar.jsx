import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      TEMA
      <Link to="/products">
        <button>menu</button>
      </Link>
    </div>
  );
};

export default Navbar;
