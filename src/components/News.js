import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import vector from "../assets/Vector.png";
import { useTranslation } from "react-i18next";
const News = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({});
  let headersList = {
    Accept: "/"
  };
  let requestOptions = {
    url: "http://89.116.236.15/api/v1/news-letter",
    method: "POST",
    headers: headersList,
    data: formData
  };
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .request(requestOptions)
      .then(() => {
        document.getElementById("news_form").reset();
        toast.success(t("newsLetter.3"));
      })
      .catch(() => {
        document.getElementById("news_form").reset();
        toast.error(t("requestForm.10"));
      });
  };
  return (
    <section className="news">
      <div className="label">
        <p>
          {t("newsLetter.1")}
        </p>
      </div>
      <form id="news_form" onSubmit={handleSubmit}>
        <input
          type="email"
          required
          name="email"
          placeholder={t("requestForm.3")}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
        />
        <button type="submit">
          {t("newsLetter.2")}
          <img src={vector} alt="send" />
        </button>
      </form>
    </section>
  );
};

export default News;
