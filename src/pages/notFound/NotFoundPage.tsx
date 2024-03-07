import { Link } from "react-router-dom";
import * as URL from "../../routes/utils/_url";
import LogoCompany from "../../assets/logos/Logo_ML.png";

import "./notFound.scss";

export const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="empty-state">
        <figure>
          <img src={LogoCompany} alt="logo" />
        </figure>
        <h4>Parece que esta página no existe</h4>
        <Link to={URL.ROUTE_URL_ROOT} className="empty-state__link">
          Ir a la página principal
        </Link>
      </div>
    </div>
  );
};
