import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async"; // <-- Tambahkan ini
import App from "./App.jsx";
import "./index.css"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      {" "}
      {/* <-- Bungkus App dengan HelmetProvider */}
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);
