import "./ProductScreen.css";

const ProductScreen = () => {
  return (
    <div className="productscreen">
      <div className="productscreen_left">
        <div className="left_image">
          <img
            src="https://res.cloudinary.com/djc9spvgh/image/upload/v1673542524/sickfits/63c03b7a783efd24e7a97db2.jpg"
            alt="name"
          />
        </div>
        <div className="left_info">
          <p className="left_name">Wine</p>
          <p>Price: EUR 49.99</p>
          <p>
            Description: "Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt
          </p>
        </div>
      </div>
      <div className="productscreen_right">
        <div className="right_info">
          <p>
            Price: <span>EUR 49.99</span>
          </p>
          <p>
            Status: <span>In Stock</span>
          </p>
          <p>
            Qty:
            <select>
              <option value="1">1 </option>
              <option value="2">2 </option>
              <option value="3">3 </option>
              <option value="4">4 </option>
            </select>
          </p>
          <p>
            <button type="button"> Add To Cart</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
