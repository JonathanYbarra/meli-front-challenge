import { ProductBreadCrumb } from "./ProductBreadCrumb";
import "./detailProduct.scss";

export const DetailProduct = () => {
  return (
    <>
      <ProductBreadCrumb />

      <div className="detail-product-wrapper">
        <div className="picture-container">
          <figure>
            <img
              src="https://th.bing.com/th/id/OIP.sKSZsnicHwpeWFoebGTu0QHaHa?w=800&h=800&rs=1&pid=ImgDetMain"
              alt="product"
            />
          </figure>
          <div className="information">
            <span>Nuevo - 234 vendidos</span>

            <h3>Iphone 15</h3>

            <div className="detail-product-price">
              <h2>$ 960</h2>
              {/* <span>{item?.price.decimals}</span> */}
            </div>

            <button className="btn btn-primary btn-block">Comprar</button>
          </div>
        </div>

        <div className="description">
          <h2 className="description-title">Descripcion del producto??</h2>
          <span className="description-text">
            JavaScript no tiene interfaces así que este principio no se aplica
            tanto como en otros idiomas. Sin embargo, es importante y es
            relevante, aunque JavaScript no tenga un siste
          </span>
        </div>
      </div>
    </>
  );
};
