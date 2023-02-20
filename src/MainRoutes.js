import React from "react";
import { Route, Routes } from "react-router-dom";
import Comments from "./components/comments/AddComment";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Home/Home";
import AddProduct from "./components/Product/AddProduct";
import EditProduct from "./components/Product/EditProduct";
import ProductList from "./components/Product/ProductList.jsx";
import CreditCardPage from "./pages/CreditCardPage";
import MenuList from "./pages/MenuList";
import AddComment from "./components/comments/AddComment";
import MyComment from "./components/comments/AddComment";
import CommentList from "./components/comments/CommentList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/create" element={<AddProduct />} />
      <Route path="credit" element={<CreditCardPage />} />
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/menulist" element={<MenuList />} />
      <Route path="/comments" element={<AddComment />} />
    </Routes>
  );
};

export default MainRoutes;
