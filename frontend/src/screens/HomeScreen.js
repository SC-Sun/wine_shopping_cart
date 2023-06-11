import "./HomeScreen.css";
import Product from "../components/Product";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, []);
  return (
    <div className="homescreen">
      <h2 className="homescreen_title"> Wine Products</h2>
      <div className="homescreen_products">
        {loading ? (
          <h2>loading....</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product, index) => (
            <Product
              id={product._id}
              name={product.name}
              key={index}
              price={product.price}
              description={product.description}
              imageUrl={product.imageUrl}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
