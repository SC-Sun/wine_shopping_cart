import "./ProductScreen.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../redux/actions/productActions";
import { useParams } from "react-router-dom";
import { cartAction } from "../redux/actions/cartAction";
import { useNavigate } from "react-router-dom";

const ProductScreen = () => {
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();
  const disPatch = useDispatch();
  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;
  useEffect(() => {
    if (product && id !== product._id) {
      disPatch(getProductDetails(id));
    }
  }, [disPatch, product, id]);

  const addToCartHandler = () => {
    disPatch(cartAction(id, qty));
    navigate("/cart");
  };
  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen_left">
            <div className="left_image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="left_info">
              <p className="left_name">{product.name}</p>
              <p>Price: EUR {product.price}</p>
              <p>{product.description}</p>
            </div>
          </div>
          <div className="productscreen_right">
            <div className="right_info">
              <p>
                Price: <span>EUR {product.price}</span>
              </p>
              <p>
                Status:{" "}
                <span>
                  {product.countInStock > 0
                    ? "In the stock"
                    : "Out of the stock"}
                </span>
              </p>
              <p>
                Qty:
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  {" "}
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
