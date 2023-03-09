import React, { useRef, useState } from "react";
import Logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { NavLink, Link } from "react-router-dom";

const Nav = ({ services, onChangeLang, ser1 }) => {
  const nav = useRef(null);
  const drop = useRef(null);
  const search = useRef(null);
  const navBtn = useRef(null);
  const { t } = useTranslation();
  const [lang, setLang] = useState("ar");
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const handlemove = () => {
    drop.current.style.height = "270px";
  };
  const handleLeave = () => {
    drop.current.style.height = "0px";
  };
  const handleclick = () => {
    if (toggle === false) {
      search.current.style.width = "150px";
      setToggle(true);
    } else {
      search.current.style.width = "0";
      setToggle(false);
    }
  };
  const handleToggle = () => {
    if (open === false) {
      nav.current.classList.add("opened");
      navBtn.current.classList.remove("fa-bars");
      navBtn.current.classList.add("fa-times");
      setOpen(true);
    } else {
      nav.current.classList.remove("opened");
      navBtn.current.classList.remove("fa-times");
      navBtn.current.classList.add("fa-bars");
      setOpen(false);
    }
  };
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
      nav.current.classList.add("active");
    } else {
      nav.current.classList.remove("active");
    }
  });
  const handleLang = e => {
    if (lang === "ar") {
      setLang("en");
      onChangeLang("en");
      e.target.innerHTML = "AR";
      i18next.changeLanguage("en");
      document.querySelector("body").classList.add("en");
    } else {
      setLang("ar");
      onChangeLang("ar");
      e.target.innerHTML = "En";
      i18next.changeLanguage("ar");
      document.querySelector("body").classList.remove("en");
    }
  };
  return (
    <nav ref={nav}>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink onClick={handleToggle} className="nav-link" to="/">
            {t("homeLink")}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to={`/services/`}
            onMouseMove={handlemove}
            onMouseLeave={handleLeave}
            onClick={handleToggle}
            className="icon nav-link"
          >
            {t("servicesLink")} <i className="fa-solid fa-caret-down" />
          </NavLink>
          <div
            ref={drop}
            onMouseMove={handlemove}
            onMouseLeave={handleLeave}
            className="drobdown"
          >
            <ul>
              {services.map(ser => {
                return (
                  <li key={ser._id}>
                    <Link to={`/services/${ser.title.en}`}>
                      {lang === "ar" ? ser.title.ar : ser.title.en}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <NavLink onClick={handleToggle} className="nav-link" to="/clients">
            {t("clientsLink")}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink onClick={handleToggle} className="nav-link" to="/employment">
            {t("employmentLink")}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink onClick={handleToggle} className="nav-link" to="/knowlege">
            {t("knowlegeLink")}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink onClick={handleToggle} className="nav-link" to="/contact">
            {t("contactLink")}
          </NavLink>
        </li>
      </ul>
      <div className="bars_btn" onClick={handleToggle}>
        <i ref={navBtn} className="fas fa-bars" />
      </div>
      <div className="search-lang">
        <input type="text" placeholder={t("search")} ref={search} />
        <button onClick={handleclick}>
          <i className="fa-solid fa-magnifying-glass" />
        </button>
        <span />
        <button onClick={handleLang}>EN</button>
      </div>
    </nav>
  );
};

export default Nav;
