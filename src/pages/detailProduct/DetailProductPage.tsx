import { useParams } from "react-router-dom";
import { DetailProduct } from "./_components";
import { Helmet } from "react-helmet";

export const DetailProductPage = () => {
  const { id } = useParams();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MELI - Detail Product</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="container">
        <DetailProduct />
      </div>
    </>
  );
};
