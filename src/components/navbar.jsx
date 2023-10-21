import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title">sneaKers</div>
      <div className="link-bar">
        <Link to="/"> Shop </Link>
        <Link to="/cart">
          <ShoppingCart size={40} />
        </Link>
      </div>
    </div>
  );
};
