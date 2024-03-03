import { ProductItem } from ".";
import { ProductBreadCrumb } from "./ProductBreadCrumb";
import "./products.scss";

export const ProductList = () => {
  return (
    <div>
      <ProductBreadCrumb />

      <ol className="product-list-container">
        {[1, 2, 3, 4, 5].map((product) => (
          <ProductItem
            key={product}
            // product={product}
          />
        ))}
      </ol>
    </div>
  );
};
