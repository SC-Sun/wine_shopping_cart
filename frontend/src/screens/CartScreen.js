import "./CartScreen.css";
import CartItems from "../components/CartItems";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartAction, removeFromCart } from "../redux/actions/cartAction";

const CartScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const qtyChangeHandler = (id, qty) => {
    dispatch(cartAction(id, qty));
  };
  const removeCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
  };
  return (
    <div className="cartscreen">
      <div className="cartscreen_left">
        <h2>Wine Cart</h2>
        {cartItems.length === 0 ? (
          <div>
            There is no item! <br />
            <Link to="/">Go Back</Link>
          </div>
        ) : (
          cartItems.map((item, index) => (
            <CartItems
              key={index}
              item={item}
              qtyChangeHandler={qtyChangeHandler}
              removeCartHandler={removeCartHandler}
            />
          ))
        )}
      </div>
      <div className="cartscreen_right">
        <div className="cart_info">
          <p>Subtotal ({getCartCount()}) </p>
          <p>EUR {getTotalPrice().toFixed(2)} </p>
          <div>
            <button type="button">Proceed to Check Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
