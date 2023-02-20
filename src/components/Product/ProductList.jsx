import { Box, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Footer from "../../footer/Footer";
import { productContext } from "../Contexts/ProductContextProvider";
import Navbar from "../Navbar/Navbar";
import MyCard from "./MyCard";
import "../Product/ProductList.css";

const ProductList = () => {
  const { getProducts, products } = useContext(productContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState("");

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      q: value,
    });
  }, [value]);

  return (
    <div
      style={{
        backgroundImage:
          "url(https://media.istockphoto.com/id/1130714046/photo/empty-dark-wooden-table-in-front-of-abstract-blurred-bokeh-background-of-restaurant-can-be.jpg?b=1&s=170667a&w=0&k=20&c=81AFO47LmBWjAa8643R4JO4bFyBRPAkYlH23Cc6t3Cw=)",

        backgroundSize: "cover",
        backgroundColor: "transparent",

        backgroundPosition: "bottom",
        backgroundAttachment: "fixed",
      }}
    >
      <div>
        <Navbar />
        <div>
          <span>
            <h1
              style={{
                color: "white",
                marginLeft: "14%",
                fontWeight: "inherit",
                marginTop: "100px",
              }}
            >
              Menu
            </h1>
          </span>
        </div>
        <hr className="hr-header" style={{ width: "70%" }} />
        <p className="p-text" style={{ color: "white" }}>
          Дорогие гости, <br />
          мы работаем для Вас <br />в режиме доставки с 12:00 до 22:30
        </p>
        <div id="wrapper">
          <form
            action=""
            autocomplete="on"
            style={{ backgroundColor: "transparent" }}
          >
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="text"
              id="search"
              name="search"
              placeholder="Search..."
              autocomplete="off"
            />
            <input id="search-btn" type="submit" />
          </form>
        </div>
      </div>

      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {products.map((product, index) => (
          <MyCard product={product} getProducts={getProducts} key={index} />
        ))}
      </Box>
      <Footer />
    </div>
  );
};

export default ProductList;
