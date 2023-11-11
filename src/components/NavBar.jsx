import "../styles/navbar.css";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar-wrapper">
      <div className="navigation-container">
        <img className="logo" src={logo} />
        <div className="menu-container">
          <Link to='/HomePage' className="menu-text">Home</Link>
          <h4 className="menu-text">About</h4>
          <Link to="/Menu" className="menu-text">
            Menu
          </Link>
          <Link to='/bookingForm' className="menu-text">Reservations</Link>
          <Link to='/Login' className="menu-text">Login</Link>
          <h4 className="menu-text order">Order Online</h4>
          <i class="fa-solid fa-shopping-bag shopping-icon" />
        </div>
      </div>
    </div>
  );
}
