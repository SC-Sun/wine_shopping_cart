import "./SideDrawer.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideDrawer = ({ show, click }) => {
  const cartData = useSelector((state) => state.cart);
  const { cartItems } = cartData;
  const cartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  const sideDrawer = ["sidedrawer"];
  if (show) sideDrawer.push("show");
  return (
    <div className={sideDrawer.join(" ")}>
      <ul className="sidedrawer_links" onClick={click}>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="sidedrawer_badge"> {cartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>Go Back</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
