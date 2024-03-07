import { useEffect } from "react";
import { ProductItem } from ".";
import { useSearchParams } from "react-router-dom";
import { useLazySearchProductsQuery } from "../../../app/services/products/products";
import { ProductBreadCrumb } from "./ProductBreadCrumb";
import "./products.scss";

export const ProductList = () => {
  const [searchProducts, { data: productList }] = useLazySearchProductsQuery();
  let [searchParams] = useSearchParams();

  useEffect(() => {
    const search = searchParams.get("search");
    search && searchProducts(search.toString());
  }, [searchParams]);

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
