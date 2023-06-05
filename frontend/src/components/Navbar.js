import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({click}) => {
  return (
    <nav className="navbar">
      <div className="nav_logo">
        <h2>Shopping Cart</h2>
      </div>
      <ul className="navbar_links">
        <li>
          <Link to="/cart" className="cart_link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo_badge">0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
      <div className="menu_logo" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
