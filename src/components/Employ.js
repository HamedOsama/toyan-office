import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import News from "./News";
const Employ = () => {
  const [formData, setFormData] = useState({});
  let headersList = {
    Accept: "/",
    "Content-Type": "multipart/form-data"
  };
  let requestOptions = {
    url: "https://el-twyan.onrender.com/api/v1/apply",
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
        toast.success("تم التقديم انتظر الرد قريبًا");
      })
      .catch(err => {
        console.error(err);
        document.getElementById("apply_form").reset();
        toast.error("حاول مره اخرى");
      });
  };
  return (
    <React.Fragment>
      <header className="employ_header">
        <div className="image" />
        <div className="path_desc">
          <h2>
            <span>التوظيف/</span>نبحث دائماً عن موظفين على قدرٍ عالٍ من الكفاءة
            يعملون بجد واجتهاد لتحقيق أفضل النتائج.
          </h2>
        </div>
      </header>
      <section className="employ_form">
        <h3>قدم على وظيفتك</h3>
        <form id="apply_form" onSubmit={handleSubmit}>
          <input
            required
            type="text"
            name="name"
            placeholder="الاسم كاملاً"
            onChange={e =>
              setFormData({ ...formData, fullName: e.target.value })}
          />
          <input
            required
            type="email"
            name="email"
            placeholder="البريد الالكتروني"
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />
          <input
            type="tel"
            name="phone"
            placeholder="رقم الهاتف"
            required
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
          />
          <div className="file_feild">
            <p>رفع السيرة الذاتية</p>
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
            placeholder="رسالة"
            required
            onChange={e =>
              setFormData({ ...formData, message: e.target.value })}
          />
          <button type="submit">إرسال</button>
        </form>
      </section>
      <News />
    </React.Fragment>
  );
};

export default Employ;
