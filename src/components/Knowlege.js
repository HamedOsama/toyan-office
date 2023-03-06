import React from "react";
import { Link } from "react-router-dom";
import News from "./News";
import blog from "../assets/blog1.jpg";
const Knowlege = () => {
  return (
    <React.Fragment>
      <header className="know_header">
        <div className="image" />
        <div className="path_desc">
          <h2>
            <span>المعرفة/</span>
            <p>
              نلتزم بمسؤوليتنا اتجاه رواد الأعمال من خلال تقديم دراسات عالمية
              حول أكثر القضايا أهمية في مجال الأعمال.
            </p>
          </h2>
        </div>
      </header>
      <div className="inner_holder">
        <section className="blogs_grid">
          <div className="blog">
            <img src={blog} alt="blog1" />
            <div className="laer">
              <h4>أهمية الوقت في خطة العمل</h4>
              <Link to="/knowlege/time-importance">{`اقرأ المزيد <<`}</Link>
              <span className="line" />
              <span className="date">10 - فبراير - 2023</span>
            </div>
          </div>
          <div className="blog">
            <img src={blog} alt="blog1" />
            <div className="laer">
              <h4>أهمية الوقت في خطة العمل</h4>
              <Link to="/knowlege/time-importance">{`اقرأ المزيد <<`}</Link>
              <span className="line" />
              <span className="date">10 - فبراير - 2023</span>
            </div>
          </div>
          <div className="blog">
            <img src={blog} alt="blog1" />
            <div className="laer">
              <h4>أهمية الوقت في خطة العمل</h4>
              <Link to="/knowlege/time-importance">{`اقرأ المزيد <<`}</Link>
              <span className="line" />
              <span className="date">10 - فبراير - 2023</span>
            </div>
          </div>
        </section>
      </div>
      <News />
    </React.Fragment>
  );
};

export default Knowlege;
