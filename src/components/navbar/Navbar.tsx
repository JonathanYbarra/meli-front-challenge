import { Link } from "react-router-dom";
import LogoCompany from "../../assets/logos/Logo_ML.png";
import "./navbar.styles.scss";
import { Icon } from "../Icons";

export const Navbar = () => {
  return (
    <nav className="container navbar">
      <div className="navbar-content">
        <Link to="/">
          <figure>
            <img src={LogoCompany} alt="logo" />
          </figure>
        </Link>

        <form className="form-search">
          <input
            name="search"
            type="text"
            className="input"
            placeholder="Nunca dejes de buscar"
            // value={formData.search}
            // onChange={handleInputChange}
          />
          <button className="btn-icon">
            <Icon name="search" />
          </button>
        </form>
      </div>
    </nav>
  );
};
