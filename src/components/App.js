import React, { useState, useEffect, useRef } from "react";
import Nav from "./Nav";
import axios from "axios";
import Home from "./Home";
import Employ from "./Employ";
import Footer from "./Footer";
import Article from "./Article";
import Clients from "./Clients";
import Contact from "./Contact";
import Services from "./Services";
import Knowlege from "./Knowlege";
import loader from "../assets/loader.gif";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [header, setHeader] = useState([]);
  const [clients, setClients] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [services, setServices] = useState([]);
  const [language, setLanguage] = useState("ar");
  const loadr = useRef(null);
  useEffect(() => {
    const clientsFetch = async () => {
      let { data } = await axios.get("http://89.116.236.15/api/v1/clients");
      setClients(data.data);
    };
    clientsFetch();
    const ContactFetch = async () => {
      let { data } = await axios.get("http://89.116.236.15/api/v1/contacts");
      setContacts(data.data);
    };
    ContactFetch();
    const sliderFetch = async () => {
      let { data } = await axios.get("http://89.116.236.15/api/v1/slider");
      setHeader(data.data);
    };
    sliderFetch();
    const servicesFetch = async () => {
      let { data } = await axios.get("http://89.116.236.15/api/v1/services");
      setServices(data.data);
    };
    servicesFetch();
    const blogsFetch = async () => {
      let { data } = await axios.get("http://89.116.236.15/api/v1/blogs");
      setBlogs(data.data);
    };
    blogsFetch();
    setTimeout(() => {
      loadr.current.style.display = "none";
    }, 4700);
  }, []);
  const handlaLangChange = lang => {
    setLanguage(lang);
  };
  return (
    <div className="App">
      <div ref={loadr} className="loader">
        <img src={loader} alt="loader" />
      </div>
      <ToastContainer position="top-right" rtl={true} />
      <Nav
        services={services}
        ser1={services[0]}
        onChangeLang={handlaLangChange}
      />
      <div className="app-holder">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                slider={header}
                lng={language}
                services={services}
                clients={clients}
              />
            }
          />
          <Route
            path="/services/:name?"
            element={<Services lng={language} services={services} />}
          />
          <Route path="/clients" element={<Clients clients={clients} />} />
          <Route path="/employment" element={<Employ />} />
          <Route
            path="/knowlege"
            element={<Knowlege lng={language} blogs={blogs} />}
          />
          <Route
            path="/knowlege/:name?"
            element={<Article lng={language} blogs={blogs} />}
          />
          <Route
            path="contact"
            element={<Contact lng={language} contacts={contacts} />}
          />
        </Routes>
      </div>
      <Footer services={services} contacts={contacts} lng={language} />
    </div>
  );
};

export default App;
