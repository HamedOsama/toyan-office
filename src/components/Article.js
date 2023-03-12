import React, { useEffect, useState } from "react";
import News from "./News";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Article = ({ blogs, lng }) => {
  const [blogObj, setBlogObj] = useState({});
  const { t } = useTranslation();
  let { name } = useParams();
  useEffect(
    () => {
      setBlogObj(blogs.filter(bl => name === bl.title.en));
    },
    [name, blogs]
  );
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
              {lng === "ar" ? blogObj[0]?.title?.ar : blogObj[0]?.title?.en}
            </p>
          </h2>
        </div>
      </header>
      <div className="blog_holder">
        <div className="article_description">
          <h3>{lng === "ar" ? blogObj[0]?.title?.ar : blogObj[0]?.title?.en}</h3>
          <article>
          {lng === "ar" ? blogObj[0]?.description?.ar : blogObj[0]?.description?.en}
          </article>
        </div>
        <div className="article_img">
          <img src={`https://api.tawyanoffice.com/images/${blogObj[0]?.image}`}
          alt={blogObj[0]?._id} />
        </div>
      </div>
      <News />
    </React.Fragment>
  );
};

export default Article;
