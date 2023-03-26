import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/footer_logo.png";
import { useTranslation } from "react-i18next";
const Footer = ({ services, lng, contacts }) => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="footer_grid">
        <div className="col logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="col">
          <h3>
            {t("aboutTitle")}
          </h3>
          <p>
            {t("aboutDesc")}
          </p>
        </div>
        <div className="col services">
          <h3>
            {t("services")}
          </h3>
          <ul>
            {services.map(ser => {
              return (
                <li key={ser._id}>
                  <Link to={`/services/${ser.title.en} `}>
                    {lng === "ar" ? ser.title.ar : ser.title.en}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="line" />
      <div className="contact">
        <h4>
          {t("forContact")}
        </h4>
        <a href={`tel:+${contacts.mainPhone}`}>
          {contacts.mainPhone}
        </a>
        <a href={`tel:+${contacts.subPhone}`}>
          {contacts.subPhone}
        </a>
        <a href={`mailto:${contacts.email}`}>
          {contacts.email}
        </a>
        <p>
          {lng === "ar" ? contacts?.address?.ar : contacts?.address?.en}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
