import "./navbar.styles.scss";
import { Icon } from "../Icons";
import { useFormik } from "formik";
import { Link, createSearchParams, useNavigate } from "react-router-dom";
import LogoCompany from "../../assets/logos/Logo_ML.png";
import * as URL from "../../routes/utils/_url";

export const Navbar = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      searchTerms: "",
    },
    onSubmit: (values) => {
      navigate({
        pathname: URL.ROUTE_URL_PRODUCTS,
        search: createSearchParams({ search: values.searchTerms }).toString(),
      });
    },
  });
  return (
    <nav className="container navbar">
      <div className="navbar-content">
        <Link to={URL.ROUTE_URL_ROOT}>
          <figure>
            <img src={LogoCompany} alt="logo" />
          </figure>
        </Link>

        <form className="form-search" onSubmit={formik.handleSubmit}>
          <input
            name="searchTerms"
            type="text"
            className="input"
            placeholder="Nunca dejes de buscar"
            onChange={formik.handleChange}
            value={formik.values.searchTerms}
          />
          <button className="btn-icon" type="submit">
            <Icon name="search" />
          </button>
        </form>
      </div>
    </nav>
  );
};
