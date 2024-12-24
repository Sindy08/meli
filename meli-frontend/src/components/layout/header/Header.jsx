import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "../../searchBox/SearchBox";
import logo from "../../../assets/images/mercado-libre.webp";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <Link to="/" title="Mercado Libre" className="header__logo">
          <img src={logo} alt="Mercado Libre" title="Mercado Libre" className="header__logo-img" loading="lazy" />
        </Link>
        <SearchBox />
      </div>
    </header>
  );
};

export default Header;
