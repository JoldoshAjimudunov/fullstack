import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./components/Contexts/AuthContextProvider";
import ProductContextProvider from "./components/Contexts/ProductContextProvider";
import CartContextProvider from "./components/Contexts/CartContextProvider";
import CommentContextProvider from "./components/Contexts/CommentContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <CommentContextProvider>
          <ProductContextProvider>
            <CartContextProvider>
              <App />
            </CartContextProvider>
          </ProductContextProvider>
        </CommentContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
