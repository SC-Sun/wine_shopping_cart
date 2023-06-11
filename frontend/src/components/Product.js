import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ imageUrl, name, price, description, id }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />
      <div className="product_info">
        <p className="product_name">{name}</p>
        <p className="product_description">
          {" "}
          {description.substring(1, 100)}....
        </p>
        <p className="info_price">EUR {price}</p>
        <Link to={`/product/${id}`} className="info_button">
          view
        </Link>
      </div>
    </div>
  );
};

export default Product;
