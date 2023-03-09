import React, { useState } from "react";
import AskService from "./AskService";
import { useTranslation } from "react-i18next";
const Clients = ({ clients }) => {
  const { t } = useTranslation();
  const [start, setStart] = useState(0);
  const [stop, setStop] = useState(12);
  const handleClick = () => {
    if (stop < clients.length) {
      setStart(start + 12);
      setStop(stop + 12);
    }
  };
  return (
    <React.Fragment>
      <header className="clients_header">
        <div className="image" />
        <div className="path_desc">
          <h2>
            <span>
              {t("clientsPage.1")}
            </span>
            <p>
              {t("clientsPage.2")}
            </p>
          </h2>
        </div>
      </header>
      <main className="clients_gird">
        {clients.slice(start, stop).map(client => {
          return (
            <div className="client_card" loading="lazy" key={client._id}>
              <img
                src={`http://89.116.236.15/images/${client.image}`}
                alt={client.name}
              />
            </div>
          );
        })}
        {clients.length > 12 &&
          <button title="load more" onClick={handleClick}>
            <i className="fas fa-chevron-down" />
          </button>}
      </main>
      <AskService />
    </React.Fragment>
  );
};

export default Clients;
