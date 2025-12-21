import { Data } from "../mock/products";
import ProductItem from "./ProductItem";

function ProductList() {
  return (
    <div className="flex flex-wrap justify-between items-center w-full my-10">
      {Data.map((item, index) => (
        <ProductItem product={item} key={index + 1} />
      ))}
    </div>
  );
}

export default ProductList;
