import Home from "./components/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";
import CredCard from "./components/CreditCard/CredCard";
import CreditCardPage from "./pages/CreditCardPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="credit" element={<CreditCardPage />} />
    </Routes>
  );
};

export default MainRoutes;
