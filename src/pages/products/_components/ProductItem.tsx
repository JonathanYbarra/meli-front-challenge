import { useNavigate } from "react-router-dom";
import { Icon } from "../../../components/Icons";
import * as URL from "../../../routes/utils/_url";
import { ProductItemProps } from "./products.types";
import { parseCurrency } from "../../../utils/parseCurrency";

export const ProductItem = (props: ProductItemProps) => {
  const { price, title, picture, freeShipping } = props;
  const navigate = useNavigate();

  const navigateDetailProduct = () => {
    navigate(`${URL.ROUTE_URL_PRODUCT}/1`);
  };

  return (
    <li className="product-item">
      <img
        className="product-item__image"
        src={picture}
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
            {parseCurrency(price.currency)} {price.amount}
            {freeShipping && (
              <div>
                <Icon name="shipping" />
              </div>
            )}
          </div>

          <p className="product-item__price-description">{title}</p>
        </div>

        <span className="product-item__place">Capital federal</span>
      </div>
    </li>
  );
};
