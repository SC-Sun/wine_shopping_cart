import "./CartScreen.css";
import CartItems from "../components/CartItems";

const CartScreen = () => {
  return (
    <div className="cartscreen">
      <div className="cartscreen_left">
        <h2>Wine Cart</h2>
        <CartItems />
        <CartItems />
        <CartItems />
        <CartItems />
      </div>
      <div className="cartscreen_right">
        <div className="cart_info">
          <p>Subtotal (0) </p>
          <p>EUR 49.99 </p>
          <div>
            <button type="button">Proceed to Check Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
