import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../context/ProductContextProvider";
import MyCard from "./MyCard";

const ProductList = () => {
  const { getProducts, products } = useContext(productContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Link to="/create">
        <button>addProduct</button>
      </Link>
      {products.map((product, index) => (
        <MyCard product={product} getProducts={getProducts} key={index} />
      ))}
    </div>
  );
};

export default ProductList;
