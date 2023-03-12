import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import News from "./News";
import { useTranslation } from "react-i18next";
const Employ = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({});
  let headersList = {
    Accept: "/",
    "Content-Type": "multipart/form-data"
  };
  let requestOptions = {
    url: "https://api.tawyanoffice.com/api/v1/apply",
    method: "POST",
    headers: headersList,
    data: formData
  };
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .request(requestOptions)
      .then(() => {
        document.getElementById("apply_form").reset();
        toast.success(t("employPage.1"));
      })
      .catch(err => {
        console.error(err);
        document.getElementById("apply_form").reset();
        toast.error(t("requestForm.10"));
      });
  };
  return (
    <React.Fragment>
      <header className="employ_header">
        <div className="image" />
        <div className="path_desc">
          <h2>
            <span>
              {t("employPage.2")}
            </span>
            <p>
              {t("employPage.3")}
            </p>
          </h2>
        </div>
      </header>
      <section className="employ_form">
        <h3>
          {t("employPage.4")}
        </h3>
        <form id="apply_form" onSubmit={handleSubmit}>
          <input
            required
            type="text"
            name="name"
            placeholder={t("employPage.5")}
            onChange={e =>
              setFormData({ ...formData, fullName: e.target.value })}
          />
          <input
            required
            type="email"
            name="email"
            placeholder={t("requestForm.3")}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />
          <input
            type="tel"
            name="phone"
            placeholder={t("requestForm.4")}
            required
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
          />
          <div className="file_feild">
            <p>
              {t("employPage.6")}
            </p>
            <input
              required
              type="file"
              name="file"
              className="file_in"
              accept="application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={e => {
                setFormData({ ...formData, resume: e.target.files[0] });
              }}
            />
          </div>
          <textarea
            name="message"
            placeholder={t("requestForm.6")}
            required
            onChange={e =>
              setFormData({ ...formData, message: e.target.value })}
          />
          <button type="submit">
            {t("requestForm.7")}
          </button>
        </form>
      </section>
      <News />
    </React.Fragment>
  );
};

export default Employ;
