import React from "react";
import "./Header.css";
import icon from "./svg/icon.svg"

const Header = () => {
  return (
    <div className="header">
      <img src={icon} alt="icon"/>
      <button>Update geolocation</button>
    </div>
  );
}

export default Header;
