import React, { useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
const RequestForm = () => {
  const { t } = useTranslation();
  const button = useRef(null);
  const hiddenArea = useRef(null);
  const [formData, setFormData] = useState({});
  const [toogle, setToogle] = useState(false);
  let headersList = {
    Accept: "/"
  };
  let requestOptions = {
    url: "https://el-twyan.onrender.com/api/v1/requests",
    method: "POST",
    headers: headersList,
    data: formData
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (toogle === false) {
      axios
        .request(requestOptions)
        .then(() => {
          setToogle(true);
          hiddenArea.current.style.display = "flex";
          button.current.innerHTML = t("requestForm.9");
          toast.success(t("requestForm.8"));
        })
        .catch(err => {
          console.error(err);
          document.getElementById("form").reset();
          toast.error(t("requestForm.10"));
        });
    } else {
      document.getElementById("form").reset();
      hiddenArea.current.style.display = "none";
      button.current.innerHTML = t("requestForm.7");
    }
  };
  return (
    <form className="sendmessage" id="form" onSubmit={handleSubmit}>
      <input
        required
        type="text"
        name="name"
        placeholder={t("requestForm.2")}
        onChange={e => setFormData({ ...formData, name: e.target.value })}
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
      <input
        required
        type="text"
        name="service-type"
        placeholder={t("requestForm.5")}
        onChange={e =>
          setFormData({ ...formData, serviceType: e.target.value })}
      />
      <textarea
        name="message"
        placeholder={t("requestForm.6")}
        required
        onChange={e => setFormData({ ...formData, message: e.target.value })}
      />
      <div className="submit_area">
        <div className="submited" ref={hiddenArea}>
          <span>
            {t("requestForm.8")}
          </span>
        </div>
        <button ref={button} type="submit">
          {t("requestForm.7")}
        </button>
      </div>
    </form>
  );
};

export default RequestForm;
