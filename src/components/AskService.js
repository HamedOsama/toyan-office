import React from "react";
import Map from "./Map";
import RequestForm from "./RequestForm";
import { useTranslation } from "react-i18next";

const AskService = () => {
  const { t } = useTranslation();
  return (
    <section className="ask_service">
      <div className="ask_descrip">
        <Map />
      </div>
      <div className="ask_form">
        <h3>
          {t("requestForm.1")}
        </h3>
        <RequestForm />
      </div>
    </section>
  );
};

export default AskService;
