import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/footer_logo.png";
import { useTranslation } from "react-i18next";
const Footer = ({ services }) => {
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
                    {ser.title.ar}
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
        <a href="tel:+055 0109 595">055 0109 595</a>
        <a href="tel:+920 009 685">920 009 685</a>
        <a href="mailto:Omaraltowyan@gmail.com">Omaraltowyan@gmail.com</a>
        <p>
          المنطقة الشرقية ، الدمام، <br /> المملكة العربية السعودية
        </p>
      </div>
    </footer>
  );
};

export default Footer;
