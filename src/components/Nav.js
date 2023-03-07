import React, { useRef, useState } from "react";
import Logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";
import { NavLink, Link } from "react-router-dom";

const Nav = ({ services }) => {
  const { i18n } = useTranslation();
  const nav = useRef(null);
  const drop = useRef(null);
  const search = useRef(null);
  const navBtn = useRef(null);
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [lang, setLang] = useState("ar");
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
      i18n.changeLanguage("en");
      e.target.innerHTML = "AR";
      document.querySelector("body").classList.add("en");
    } else {
      setLang("ar");
      i18n.changeLanguage("ar");
      e.target.innerHTML = "En";
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
            {/*{t("home")}*/}
            الرئيسية
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
            خدماتنا <i className="fa-solid fa-caret-down" />
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
                      {ser.title.ar}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <NavLink onClick={handleToggle} className="nav-link" to="/clients">
            عملاؤنا
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink onClick={handleToggle} className="nav-link" to="/employment">
            التوظيف
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink onClick={handleToggle} className="nav-link" to="/knowlege">
            المعرفة
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink onClick={handleToggle} className="nav-link" to="/contact">
            اتصل بنا
          </NavLink>
        </li>
      </ul>
      <div className="bars_btn" onClick={handleToggle}>
        <i ref={navBtn} className="fas fa-bars" />
      </div>
      <div className="search-lang">
        <input type="text" placeholder="ابحث عن خدمه" ref={search} />
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
