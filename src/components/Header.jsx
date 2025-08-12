import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
        <h3 className="brand-name">Chewsy</h3>
      </div>
      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Your Cart</li>
          <li>Offers</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
