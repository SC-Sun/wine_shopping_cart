import "./Product.css";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="product">
      <img
        src="https://res.cloudinary.com/djc9spvgh/image/upload/v1673542524/sickfits/63c03b7a783efd24e7a97db2.jpg"
        alt="product"
      />
      <div className="product_info">
        <p className="product_name">Wine</p>
        <p className="product_description">
          {" "}
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt
        </p>
        <p className="info_price">EUR 49,99</p>
        <Link to={`/product/${1111}`} className="info_button">
          view
        </Link>
      </div>
    </div>
  );
};

export default Product;
