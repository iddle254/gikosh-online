import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Gikosh.svg";
import "./header.styles.scss";

function Header() {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
}

export default Header;
