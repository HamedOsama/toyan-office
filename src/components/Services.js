import React, { useState, useEffect } from "react";
import AskService from "./AskService";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
const Services = ({ services, lng }) => {
  const { t } = useTranslation();
  const [serObj, setSerObj] = useState({});
  let pathLocation = useParams().name;
  useEffect(
    () => {
      setSerObj(services.filter(ser => pathLocation === ser.title.en));
    },
    [pathLocation, services]
  );
  return (
    <React.Fragment>
      <header className="services_header">
        <div className="image" />
        <div className="path_desc">
          <h2>
            <span>
              {t("ourServices")}
            </span>
            <p>
              {lng === "ar" ? serObj[0]?.title?.ar : serObj[0]?.title?.en}
            </p>
          </h2>
        </div>
      </header>
      <div className="services_container">
        <aside>
          <ul>
            {services.map(ser => {
              return (
                <li key={ser._id}>
                  <NavLink to={`/services/${ser.title.en}`}>
                    {lng === "ar" ? ser.title.ar : ser.title.en}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </aside>
        <main>
          <p>
          {lng === "ar"?serObj[0]?.description?.ar : serObj[0]?.description?.en}
          </p>
        </main>
      </div>
      <AskService />
    </React.Fragment>
  );
};

export default Services;
