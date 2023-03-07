import React, { useState, useEffect, useRef } from "react";
import Nav from "./Nav";
import axios from "axios";
import Home from "./Home";
import Services from "./Services";
import Clients from "./Clients";
import Employ from "./Employ";
import Knowlege from "./Knowlege";
import Contact from "./Contact";
import Footer from "./Footer";
import Article from "./Article";
import loader from "../assets/loader.gif";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [header, setHeader] = useState([]);
  const [clients, setClients] = useState([]);
  const [services, setServices] = useState([]);
  const loadr = useRef(null);
  useEffect(() => {
    const clientsFetch = async () => {
      let { data } = await axios.get(
        "https://el-twyan.onrender.com/api/v1/clients"
      );
      setClients(data.data);
    };
    clientsFetch();
    const sliderFetch = async () => {
      let { data } = await axios.get(
        "https://el-twyan.onrender.com/api/v1/slider"
      );
      setHeader(data.data);
    };
    sliderFetch();
    const servicesFetch = async () => {
      let { data } = await axios.get(
        "https://el-twyan.onrender.com/api/v1/services"
      );
      setServices(data.data);
    };
    servicesFetch();
    setTimeout(() => {
      loadr.current.style.display = "none";
    }, 4700);
  }, []);
  return (
    <div className="App">
      <div ref={loadr} className="loader">
        <img src={loader} alt="loader" />
      </div>
      <ToastContainer position="top-right" rtl={true} />
      <Nav services={services} />
      <div className="app-holder">
        <Routes>
          <Route
            path="/"
            element={
              <Home slider={header} services={services} clients={clients} />
            }
          />
          <Route
            path="/services/:name?"
            element={<Services services={services} />}
          />
          <Route path="/clients" element={<Clients clients={clients} />} />
          <Route path="/employment" element={<Employ />} />
          <Route path="/knowlege" element={<Knowlege />} />
          <Route path="/knowlege/:name?" element={<Article />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer services={services} />
    </div>
  );
};

export default App;
