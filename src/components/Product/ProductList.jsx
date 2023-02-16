import { Box, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Footer from "../../footer/Footer";
import { productContext } from "../Contexts/ProductContextProvider";
import Navbar from "../Navbar/Navbar";
import MyCard from "./MyCard";

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
    <div>
      <div>
        <Navbar />
        <div className="header-list">
          <span>
            <h1 className="menu-text">Menu</h1>
          </span>
          <span>
            <a href="/credit" className="oplata">
              Перейти к оплате
            </a>
          </span>
        </div>
        <hr className="hr-header" />
        <p className="p-text">
          Дорогие гости, <br />
          мы работаем для Вас <br />в режиме доставки с 12:00 до 22:30
        </p>

        <div className="inp-btn">
          <input
            placeholder="Поиск"
            style={{ width: "75ch", height: "20px" }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Link to="/create">
            <button className="btnAdd">
              <p className="addProduct">addProduct</p>
            </button>
          </Link>
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
