import "./navbar.styles.scss";
import { Icon } from "../Icons";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import LogoCompany from "../../assets/logos/Logo_ML.png";
import { useSearchContext } from "../../context";

export const Navbar = () => {
  const { setSearch } = useSearchContext();

  const formik = useFormik({
    initialValues: {
      searchTerms: "",
    },
    onSubmit: (values) => {
      setSearch(values.searchTerms);
    },
  });
  return (
    <nav className="container navbar">
      <div className="navbar-content">
        <Link to="/">
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
          <button className="btn-icon">
            <Icon name="search" />
          </button>
        </form>
      </div>
    </nav>
  );
};
