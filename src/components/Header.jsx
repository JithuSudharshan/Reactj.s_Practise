import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        />
        <h3 className="brand-name">Chewsy</h3>
      </div>
      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Your Cart</li>
          <li>Offers</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;