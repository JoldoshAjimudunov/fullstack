import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import AuthContextProvider from "./components/Contexts/AuthContextProvider";
import ProductContextProvider from "./components/context/ProductContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <AuthContextProvider> */}
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
      {/* </AuthContextProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
