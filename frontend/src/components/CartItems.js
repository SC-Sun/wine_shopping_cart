import "./CartItems.css";
import { Link } from "react-router-dom";

const CartItems = ({ item, qtyChangeHandler, removeCartHandler }) => {
  return (
    <div className="cartItems">
      <div className="cartitems_image">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <Link to={`/product/${item.product}`} className="cartitems_name">
        {item.name}
      </Link>
      <p className="cartitems_price">EUR {item.price}</p>
      <select
        className="cartitems_select"
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
      >
        {[...Array(item.countInStock).keys()].map((p) => (
          <option key={p + 1} value={p + 1}>
            {p + 1}
          </option>
        ))}
      </select>
      <button
        className="cartitems_deleteBtn"
        type="button"
        onClick={() => removeCartHandler(item.product)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItems;
