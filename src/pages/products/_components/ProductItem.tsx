import { useNavigate } from "react-router-dom";
import { Icon } from "../../../components/Icons";
import * as URL from "../../../routes/utils/_url";

export const ProductItem = () => {
  const navigate = useNavigate();

  const navigateDetailProduct = () => {
    navigate(`${URL.ROUTE_URL_PRODUCT}/1`);
  };

  return (
    <li className="product-item">
      <img
        className="product-item__image"
        src="https://http2.mlstatic.com/D_NQ_NP_681473-MLU72604604747_102023-O.webp"
        alt="product"
        onClick={navigateDetailProduct}
      />

      <div className="product-item__information">
        <div
          role="button"
          className="product-item__price"
          onClick={navigateDetailProduct}
        >
          <div className="product-item__price-value">
            {/* {parseCurrency(price.currency)} {price.amount} */}
            <span>$ 1980</span>
            <div>
              <Icon name="shipping" />
            </div>
          </div>

          <p className="product-item__price-description">
            Smart TV LG AI ThinQ 55NANO80SPA LED webOS 6.0 4K 55" 100V/240V
          </p>
        </div>

        <span className="product-item__place">Capital federal</span>
      </div>
    </li>
  );
};
