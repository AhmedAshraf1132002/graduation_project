import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { HelmetProvider } from "react-helmet-async";
import "./i18n";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
  </StrictMode>
);
