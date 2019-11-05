import React from "react";
import "./Header.css";
import icon from "./svg/icon.svg"

const Header = (props) => {
  return (
    <div className="header">
      <img src={icon} alt="icon"/>
      <button>Update geolocation</button>
      <form onClick={props.weatherMethod}>
       <button>Получить погоду</button>
      </form>
    </div>
  );
}

export default Header;
