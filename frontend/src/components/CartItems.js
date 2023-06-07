import "./CartItems.css";
import { Link } from "react-router-dom";
const CartItems = () => {
  return (
    <div className="cartItems">
      <div className="cartitems_image">
        <img
          src="https://res.cloudinary.com/djc9spvgh/image/upload/v1673542524/sickfits/63c03b7a783efd24e7a97db2.jpg"
          alt="product"
        />
      </div>
      <Link to={`/product/${111}`} className="cartitems_name">
        Product 1
      </Link>
      <p className="cartitems_price">EUR 49.99</p>
      <select className="cartitems_select">
        <option value="1">1 </option>
        <option value="2">2 </option>
        <option value="3">3 </option>
        <option value="4">4 </option>
      </select>
      <button className="cartitems_deleteBtn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItems;
