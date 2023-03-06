import React from "react";
import News from "./News";
import Map from "./Map";
import RequestForm from "./RequestForm";
const Contact = () => {
  return (
    <React.Fragment>
      <header className="contact_header">
        <div className="image" />
        <div className="path_desc">
          <h2>
            <span>تواصل معنا/</span>
            <p>نقدم حلولاً متخصصة ومبتكرة، لا تتردد في التواصل معنا</p>
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
          <h4>اتصل بنا</h4>
          <a href="mailto:Omaraltowyan@gmail.com">Omaraltowyan@gmail.com</a>
          <a href="tel:+055 0109 595">+055 0109 595</a>
          <a href="tel:+920 009 685">+920 009 685</a>
        </div>
        <div className="info_card">
          <h4>العنوان</h4>
          <p>
            المنطقة الشرقية ، الدمام، <br /> المملكة العربية السعودية
          </p>
        </div>
        <div className="info_card">
          <h4>ساعات العمل</h4>
          <p>
            السبت – الخميس <br /> 8:00 صباحًا – 8:00 مساءً
          </p>
        </div>
      </div>
      <News />
    </React.Fragment>
  );
};

export default Contact;
