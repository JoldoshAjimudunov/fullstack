import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/page/MainPage";
import AddProduct from "./components/Product/AddProduct";
import EditProduct from "./components/Product/EditProduct";
import ProductList from "./components/Product/ProductList.jsx";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/create" element={<AddProduct />} />
      <Route path="/edit/:id" element={<EditProduct />} />
    </Routes>
  );
};

export default MainRoutes;
