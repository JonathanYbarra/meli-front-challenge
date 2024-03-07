import { useParams } from "react-router-dom";
import { ProductBreadCrumb } from "./ProductBreadCrumb";
import { useEffect } from "react";
import { useLazyProductByIdQuery } from "../../../app/services/products/products";
import { parseCurrency } from "../../../utils/parseCurrency";
import "./detailProduct.scss";

export const DetailProduct = () => {
  const { id } = useParams();
  const [getProduct, { data }] = useLazyProductByIdQuery();

  useEffect(() => {
    id && getProduct(id);
  }, [id]);

  return (
    <>
      <ProductBreadCrumb />

      <div className="detail-product-wrapper">
        <div className="picture-container">
          <figure>
            <img src={data?.item.picture} alt="product" />
          </figure>
          <div className="information">
            <span>Nuevo - 234 vendidos</span>

            <h3>{data?.item.title}</h3>

            <div className="detail-product-price">
              <h2>
                {parseCurrency(data?.item.price.currency)}{" "}
                {data?.item.price.amount}
              </h2>
            </div>

            <button className="btn btn-primary btn-block">Comprar</button>
          </div>
        </div>

        <div className="description">
          <h2 className="description-title">Descripcion del producto</h2>
          <span className="description-text">{data?.item.description}</span>
        </div>
      </div>
    </>
  );
};
