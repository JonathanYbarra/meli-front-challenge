import { Helmet } from "react-helmet";
import { ProductList } from "./_components";

export const ProductsPage = () => {
  console.log("ITEMS PAGE")
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MELI - Items</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="container">
        <ProductList />
      </div>
    </>
  );
};
