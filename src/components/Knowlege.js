import React from "react";
import { Link } from "react-router-dom";
import News from "./News";
import { useTranslation } from "react-i18next";
const Knowlege = ({ blogs, lng }) => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <header className="know_header">
        <div className="image" />
        <div className="path_desc">
          <h2>
            <span>
              {t("blogPage.1")}
            </span>
            <p>
              {t("blogPage.2")}
            </p>
          </h2>
        </div>
      </header>
      <div className="inner_holder">
        <section className="blogs_grid">
          {blogs.map(b => {
            return (
              <div key={b._id} className="blog">
                <img
                  src={`https://test.dummydealer.com/images/${b.image}`}
                  alt={b._id}
                />
                <div className="laer">
                  <h4>
                    {lng === "ar" ? b.title.ar : b.title.en}
                  </h4>
                  <Link to={`/knowlege/${b.title.en}`}>
                    {t("read")}
                  </Link>
                  <span className="line" />
                  <span className="date">
                    {b.createdAt.slice(0, b.createdAt.indexOf("T"))}
                  </span>
                </div>
              </div>
            );
          })}
        </section>
      </div>
      <News />
    </React.Fragment>
  );
};

export default Knowlege;
