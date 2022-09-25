import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="nav">
      <div className="header">
      <img src={logo} alt="" />
      <div>
        <a href="/shop">Shope</a>
        <a href="/order">Orders</a>
        <a href="/inventory">Inventory</a>
        <a href="/about">About</a>
      </div>
      </div>
    </nav>
  );
};

export default Header;
