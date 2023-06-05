import "./SideDrawer.css";
import { Link } from "react-router-dom";

const SideDrawer = ({ show, click }) => {
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
              <span className="sidedrawer_badge"> 0</span>
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
