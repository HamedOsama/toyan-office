import React from "react";
import News from "./News";
import Map from "./Map";
import RequestForm from "./RequestForm";
import { useTranslation } from "react-i18next";

const Contact = ({ contacts, lng }) => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <header className="contact_header">
        <div className="image" />
        <div className="path_desc">
          <h2>
            <span>
              {t("contactPage.1")}
            </span>
            <p>
              {t("contactPage.2")}
            </p>
          </h2>
        </div>
      </header>
      <div className="map">
        <div className="form">
          <RequestForm />
        </div>
        <Map />
      </div>
      <div className="info">
        <div className="info_card">
          <h4>
            {t("contactPage.5")}
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
        </div>
        <div className="info_card">
          <h4>
            {t("contactPage.6")}
          </h4>
          <p>
            {lng === "ar" ? contacts?.address?.ar : contacts?.address?.en}
          </p>
        </div>
        <div className="info_card">
          <h4>
            {t("contactPage.7")}
          </h4>
          <p>
            {t("contactPage.8")}
          </p>
          <p>
            {t("contactPage.9")}
          </p>
        </div>
      </div>
      <News />
    </React.Fragment>
  );
};

export default Contact;
