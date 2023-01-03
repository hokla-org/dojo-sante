import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./common.css";
import Home from "./components/Home/Home";
import Patient from "./components/Patient/Patient";
import { ConfigProvider } from "antd";
import "./common.css";
import frFR from "antd/es/locale/fr_FR";

import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import initMedicalDataStorage from "./data/initMedicalDataStorage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/patient/:id", element: <Patient /> },
]);

initMedicalDataStorage();

const rootElement = document.getElementById("root");

if (rootElement !== null) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ConfigProvider locale={frFR}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
