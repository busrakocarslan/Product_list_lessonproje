import "./ProductCard.scss";
import { products } from "../../helper/data";
import Productlist from "./ProductList";

const ProductCard = ({ product }) => {
  console.log(products);
  return (
    <div className="products-list">
      {products.map((product) => (
        <Productlist key={product.id} {...product} />
      ))}
    </div>
  );
};
export default ProductCard;
