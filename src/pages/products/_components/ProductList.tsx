import { useEffect } from "react";
import { ProductItem } from ".";
import { useLazySearchProductsQuery } from "../../../app/services/products/products";
import { ProductBreadCrumb } from "./ProductBreadCrumb";
import "./products.scss";
import { useSearchContext } from "../../../context";

export const ProductList = () => {
  const { searchTerms } = useSearchContext();

  const [searchProducts, { data: productList }] = useLazySearchProductsQuery();

  useEffect(() => {
    searchProducts(searchTerms);
  }, [searchTerms]);

  return (
    <div>
      <ProductBreadCrumb />

      <ol className="product-list-container">
        {productList?.items.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ol>
    </div>
  );
};
