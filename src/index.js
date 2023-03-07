import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./components/App";
import ScrollToTopOnNav from "./components/ScrollTOTopOnNav";
import "./i18next";
import "./global.css";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Suspense fallback={<div className="Loader">loading.....</div>}>
      <ScrollToTopOnNav />
      <App />
    </Suspense>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
