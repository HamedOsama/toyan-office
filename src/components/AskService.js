import React from "react";
import RequestForm from "./RequestForm";
import { useTranslation } from "react-i18next";

const AskService = () => {
  const { t } = useTranslation();
  return (
    <section className="ask_service">
      <div className="ask_descrip">
        <h3>
          {t("askSequense.1")}
        </h3>
        <ol>
          <li>
            {t("askSequense.2")}
          </li>
          <li>
            {t("askSequense.3")}
          </li>
          <li>
            {t("askSequense.4")}
          </li>
          <li>
            {t("askSequense.5")}
          </li>
          <li>
            {t("askSequense.6")}
          </li>
        </ol>
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
